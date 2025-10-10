import { MapPin, Video, Users, Calendar, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { BookingDialog } from './BookingDialog';
import { useState } from 'react';

export function ArtEducation() {
  const [bookingOpen, setBookingOpen] = useState(false);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="mb-4">Art Education Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Comprehensive art education programs designed to enhance understanding, appreciation, 
          and critical engagement with contemporary art. Available both onsite in Zurich and online.
        </p>
      </div>

      {/* Service Overview */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="border border-border rounded-xl p-8 hover:shadow-xl hover:shadow-primary/10 transition-all hover:border-primary/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <MapPin size={24} className="text-primary" />
            </div>
            <h2>Onsite in Zurich</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Personalized art education sessions in Zurich, including gallery visits, 
            workshop facilitation, and tailored educational programs for institutions, 
            schools, and private groups.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Museum and gallery guided tours</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Hands-on art workshops</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Corporate art appreciation programs</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Educational institution partnerships</span>
            </li>
          </ul>
        </div>

        <div className="border border-border rounded-xl p-8 hover:shadow-xl hover:shadow-primary/10 transition-all hover:border-primary/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-accent/60 rounded-lg">
              <Video size={24} className="text-accent-foreground" />
            </div>
            <h2>Online Programs</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Flexible online art education sessions accessible from anywhere in the world. 
            Interactive webinars, virtual gallery tours, and personalized art consultation 
            services.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Live interactive webinars</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>One-on-one art consultation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Virtual exhibition tours</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Recorded course modules</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Educational Approach */}
      <div className="mb-16">
        <h2 className="mb-6">Educational Approach</h2>
        <div className="bg-gradient-to-br from-muted/80 to-accent/20 rounded-xl p-8 border border-border">
          <p className="text-muted-foreground leading-relaxed mb-6">
            My educational philosophy centers on making contemporary art accessible and engaging 
            for diverse audiences. Through interactive discussions, hands-on activities, and 
            contextual analysis, I help participants develop critical thinking skills and deepen 
            their appreciation for artistic practice.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Each program is tailored to the specific needs, interests, and learning objectives 
            of the participants, whether they are students, art enthusiasts, collectors, or 
            professionals seeking to expand their knowledge of contemporary art.
          </p>
        </div>
      </div>

      {/* Program Types */}
      <div className="mb-16">
        <h2 className="mb-6">Program Types</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users size={24} className="text-muted-foreground" />
              <h3>Group Workshops</h3>
            </div>
            <p className="text-muted-foreground">
              Interactive sessions for groups of 8-20 participants, exploring specific themes, 
              movements, or techniques in contemporary art.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar size={24} className="text-muted-foreground" />
              <h3>Lecture Series</h3>
            </div>
            <p className="text-muted-foreground">
              Comprehensive multi-session programs covering art history, curatorial practice, 
              and contemporary art theory.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen size={24} className="text-muted-foreground" />
              <h3>Private Consultation</h3>
            </div>
            <p className="text-muted-foreground">
              One-on-one sessions tailored to individual interests, from collection building 
              to deepening understanding of specific artists or movements.
            </p>
          </div>
        </div>
      </div>

      {/* Topics Covered */}
      <div className="mb-16">
        <h2 className="mb-6">Topics Covered</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="mb-4">Curatorial Practice</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Exhibition design and development</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Art historical research methods</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Working with artists and institutions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Contemporary curatorial theory</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4">Art Appreciation</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Understanding contemporary art movements</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Developing critical viewing skills</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Artist studio practices</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Building and managing art collections</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative bg-gradient-to-br from-primary/10 via-accent/20 to-primary/5 rounded-2xl p-8 md:p-12 text-center border-2 border-primary/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="relative">
          <h2 className="mb-4">Ready to Begin Your Art Education Journey?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're looking for onsite sessions in Zurich or prefer the flexibility of 
            online learning, I'm here to help you deepen your engagement with contemporary art.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setBookingOpen(true)}
              className="shadow-lg shadow-primary/20"
            >
              <Calendar size={18} className="mr-2" />
              Book a Session
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </div>
      
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
}
