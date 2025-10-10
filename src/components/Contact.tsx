import { Mail, Linkedin, Instagram, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/make-server-b97bd89f/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert('✅ Thank you for your message! I will get back to you soon at ' + formData.email);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      alert(`❌ Error sending message: ${error.message}\n\nPlease try again or email me directly.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="mb-4">Get in Touch</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          I'd love to hear from you. Whether you're interested in curatorial services, 
          art education programs, or potential collaborations, please feel free to reach out.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                type="text"
                placeholder="What's this regarding?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me more about your inquiry..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="mt-2"
              />
            </div>

            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full shadow-lg shadow-primary/20 disabled:opacity-50">
              <Send size={16} className="mr-2" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="mb-6">Connect With Me</h2>
          
          <div className="space-y-6 mb-8">
            <div className="group border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all hover:border-primary/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Linkedin size={20} className="text-primary" />
                </div>
                <h3>LinkedIn</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Connect with me professionally and stay updated on my latest projects and collaborations.
              </p>
              <a
                href="https://www.linkedin.com/in/emotional1healing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-2"
              >
                Visit Profile →
              </a>
            </div>

            <div className="group border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all hover:border-primary/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent/60 rounded-lg group-hover:bg-accent transition-colors">
                  <Instagram size={20} className="text-accent-foreground" />
                </div>
                <h3>Instagram</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Follow for behind-the-scenes glimpses of exhibitions, art education sessions, and curatorial insights.
              </p>
              <a
                href="https://instagram.com/alexandra_love4art"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-2"
              >
                @alexandra_love4art →
              </a>
            </div>

            <div className="group border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all hover:border-primary/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail size={20} className="text-primary" />
                </div>
                <h3>Email</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                For direct inquiries, please use the contact form or send me an email.
              </p>
              <p className="text-foreground">contact@alexandracherali.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/20 rounded-xl p-6 border border-primary/20">
            <h3 className="mb-3 text-primary">Location</h3>
            <p className="text-foreground">
              Based in Zurich, Switzerland
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Available for onsite consultations in Zurich and online sessions worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
