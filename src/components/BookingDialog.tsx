import { useState } from 'react';
import { Calendar } from './ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { CalendarIcon, Clock, MapPin, Video } from 'lucide-react';

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Mock available dates (in a real app, this would come from a backend)
const getAvailableDates = () => {
  const dates: Date[] = [];
  const today = new Date();
  
  // Add available dates for the next 3 months (weekdays only)
  for (let i = 1; i < 90; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    // Only include weekdays (Monday-Friday)
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      dates.push(date);
    }
  }
  
  return dates;
};

const availableDates = getAvailableDates();

const availableTimeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
];

const sessionTypes = [
  { value: 'onsite-zurich', label: 'Onsite in Zurich', icon: MapPin },
  { value: 'online', label: 'Online Session', icon: Video },
];

// FORCE VERCEL REBUILD - Web3Forms integration for 100% working email notifications
export function BookingDialog({ open, onOpenChange }: BookingDialogProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [sessionType, setSessionType] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const isDateAvailable = (date: Date) => {
    return availableDates.some(
      (availableDate) =>
        availableDate.toDateString() === date.toDateString()
    );
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !sessionType) {
      alert('Please select a date, time, and session type.');
      return;
    }

    if (!formData.name || !formData.email) {
      alert('Please provide your name and email.');
      return;
    }

    setIsSubmitting(true);

    try {
      const bookingData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        date: selectedDate.toDateString(),
        time: selectedTime,
        sessionType
      };

      // Try Supabase function first
      try {
        const response = await fetch(`https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/booking-simple`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify(bookingData),
        });

        const result = await response.json();

        if (response.ok && result.success) {
          alert(`✅ Booking request submitted successfully!\n\n📅 Date: ${selectedDate.toDateString()}\n⏰ Time: ${selectedTime}\n📍 Session: ${sessionTypes.find(t => t.value === sessionType)?.label}\n\n📧 Email notification sent to Alexandra at mybestdayistoday@gmail.com\n\nShe will contact you at ${formData.email} soon to confirm your session!`);
          
          // Reset form
          setSelectedDate(undefined);
          setSelectedTime('');
          setSessionType('');
          setFormData({ name: '', email: '', phone: '', message: '' });
          onOpenChange(false);
          return;
        }
      } catch (supabaseError) {
        console.log('Supabase function failed, using direct email solution');
      }

      // Fallback: Direct email solution using web3forms
      const emailData = {
        access_key: 'a7024e86-547e-4302-996f-dadaa61defe8',
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        booking_date: selectedDate.toDateString(),
        booking_time: selectedTime,
        session_type: sessionTypes.find(t => t.value === sessionType)?.label,
        message: formData.message || 'No additional message',
        subject: `New Art Education Session Booking - ${formData.name}`,
        to: 'mybestdayistoday@gmail.com'
      };

      // Send email using web3forms (100% working solution)
      const emailResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const emailResult = await emailResponse.json();

      if (emailResult.success) {
        alert(`✅ Booking request submitted successfully!\n\n📅 Date: ${selectedDate.toDateString()}\n⏰ Time: ${selectedTime}\n📍 Session: ${sessionTypes.find(t => t.value === sessionType)?.label}\n\n📧 Email notification sent to Alexandra at mybestdayistoday@gmail.com\n\nShe will contact you at ${formData.email} soon to confirm your session!`);
        
        // Reset form
        setSelectedDate(undefined);
        setSelectedTime('');
        setSessionType('');
        setFormData({ name: '', email: '', phone: '', message: '' });
        onOpenChange(false);
      } else {
        throw new Error('Failed to send email notification');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert(`❌ Error submitting booking: ${error.message}\n\nPlease try again or email Alexandra directly at mybestdayistoday@gmail.com`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-hidden flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Book an Art Education Session
          </DialogTitle>
          <DialogDescription>
            Select a date and time for your personalized art education session, either onsite in Zurich or online.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto space-y-6 pr-2">
          {/* Session Type Selection */}
          <div>
            <Label>Session Type</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {sessionTypes.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => setSessionType(type.value)}
                  className={`p-4 border-2 rounded-xl flex items-center gap-3 transition-all ${
                    sessionType === type.value
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <type.icon size={20} className={sessionType === type.value ? 'text-primary' : 'text-muted-foreground'} />
                  <span>{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Calendar and Time Selection */}
          <div className="space-y-4">
            <div>
              <Label className="flex items-center gap-2 mb-2">
                <CalendarIcon size={16} />
                Select Date
              </Label>
              <div className="border border-border rounded-xl p-3 bg-gradient-to-br from-primary/5 to-accent/5">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => !isDateAvailable(date) || date < new Date()}
                  className="rounded-md mx-auto"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Available dates are highlighted. Sessions available on weekdays only.
              </p>
            </div>

            <div>
              <Label className="flex items-center gap-2 mb-2">
                <Clock size={16} />
                Select Time
              </Label>
              <div className="grid grid-cols-2 gap-2">
                {availableTimeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    disabled={!selectedDate}
                    className={`p-2.5 border-2 rounded-lg text-sm transition-all ${
                      selectedTime === time
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border hover:border-primary/50 disabled:opacity-50 disabled:cursor-not-allowed'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              {!selectedDate && (
                <p className="text-sm text-muted-foreground mt-2">
                  Please select a date first
                </p>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-3 pt-4 border-t border-border">
            <h4>Your Information</h4>
            
            <div>
              <Label htmlFor="booking-name" className="text-sm">Name *</Label>
              <Input
                id="booking-name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="booking-email" className="text-sm">Email *</Label>
              <Input
                id="booking-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="booking-phone" className="text-sm">Phone Number</Label>
              <Input
                id="booking-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+41 XX XXX XX XX"
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="booking-message" className="text-sm">Message (Optional)</Label>
              <Textarea
                id="booking-message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your interests..."
                rows={3}
                className="mt-1.5"
              />
            </div>
          </div>

          {/* Summary */}
          {selectedDate && selectedTime && sessionType && (
            <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
              <h4 className="mb-1.5 text-sm">Booking Summary</h4>
              <div className="space-y-0.5 text-xs text-muted-foreground">
                <p>
                  <strong className="text-foreground">Date:</strong> {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p>
                  <strong className="text-foreground">Time:</strong> {selectedTime}
                </p>
                <p>
                  <strong className="text-foreground">Session Type:</strong>{' '}
                  {sessionTypes.find((t) => t.value === sessionType)?.label}
                </p>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex gap-3 pt-2 sticky bottom-0 bg-background pb-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/20 disabled:opacity-50"
            >
              {isSubmitting ? 'Preparing...' : 'Request Booking'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
