import profileImage from 'figma:asset/0841dd0ecaa79c317661db488b77b838d9053036.png';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { BookingDialog } from './BookingDialog';
import { useState } from 'react';
import { Calendar } from 'lucide-react';

export function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full mb-4 border border-primary/30">
            Art Curator & Educator
          </div>
          <h1 className="mb-6 bg-gradient-to-br from-primary via-foreground to-accent/70 bg-clip-text text-transparent">
            Alexandra Cherali
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
            Specializing in contemporary art curation and education, I bridge the gap between 
            artistic expression and public engagement. With expertise in exhibition design, 
            institutional collaboration, and innovative art education programs, I create 
            transformative experiences that make art accessible and meaningful.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              onClick={() => setBookingOpen(true)}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/30"
            >
              <Calendar size={18} className="mr-2" />
              Book a Session
            </Button>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-2 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5">
                View Portfolio
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-2 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5">
                Get in Touch
              </Button>
            </Link>
          </div>
          
          <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
        </div>
        <div className="relative flex justify-center">
          {/* Animated gradient background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-80 h-80 bg-gradient-to-br from-primary/30 via-accent/30 to-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute w-64 h-64 bg-gradient-to-tr from-accent/40 to-primary/30 rounded-full blur-2xl" />
          </div>
          
          {/* Circular profile image */}
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10 bg-gradient-to-br from-primary/5 to-accent/5">
              <img
                src={profileImage}
                alt="Alexandra Cherali"
                className="w-full h-full object-cover object-[center_35%] scale-110"
                style={{
                  objectPosition: 'center 35%',
                  transform: 'translate(-5%, -10%) scale(1.1)'
                }}
              />
            </div>
            {/* Gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-20 blur-sm" />
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mb-20 relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl" />
        
        <div className="relative">
          <h2 className="mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">About</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As an art curator and educator, I am dedicated to fostering meaningful connections 
                between contemporary art and diverse audiences. My curatorial practice focuses on 
                creating exhibitions that challenge perspectives, provoke dialogue, and celebrate 
                artistic innovation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Based in Zurich, I offer comprehensive art education services both onsite and online, 
                working with institutions, galleries, and private clients to develop tailored programs 
                that enhance art appreciation and understanding.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-primary/20 shadow-lg">
              <h3 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Areas of Expertise</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-3 text-primary">→</span>
                  <span>Contemporary Art Curation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary">→</span>
                  <span>Exhibition Design & Development</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary">→</span>
                  <span>Art Education & Workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary">→</span>
                  <span>Institutional Partnerships</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary">→</span>
                  <span>Collection Development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Projects */}
      <div>
        <h2 className="mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Key Projects & Collaborations
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative border border-border rounded-2xl p-6 bg-card hover:shadow-2xl hover:shadow-primary/10 transition-all hover:-translate-y-2 hover:border-primary/50 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl group-hover:from-primary/20 transition-all" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
              <span className="text-primary font-bold">01</span>
            </div>
            <h3 className="mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all">
              Contemporary Dialogues
            </h3>
            <p className="text-muted-foreground mb-4">
              A groundbreaking exhibition series exploring the intersection of traditional 
              and contemporary artistic practices.
            </p>
            <p className="text-sm text-muted-foreground">Zurich Art Museum, 2024</p>
          </div>
          
          <div className="group relative border border-border rounded-2xl p-6 bg-card hover:shadow-2xl hover:shadow-accent/10 transition-all hover:-translate-y-2 hover:border-accent/50 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-2xl group-hover:from-accent/20 transition-all" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-accent/30 to-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-accent/40 group-hover:to-accent/30 transition-all">
              <span className="text-accent-foreground font-bold">02</span>
            </div>
            <h3 className="mb-3 group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-primary group-hover:bg-clip-text group-hover:text-transparent transition-all">
              Art Education Initiative
            </h3>
            <p className="text-muted-foreground mb-4">
              Developed and implemented comprehensive art education programs for diverse 
              community groups.
            </p>
            <p className="text-sm text-muted-foreground">Cultural Centers, Zurich 2023-2024</p>
          </div>
          
          <div className="group relative border border-border rounded-2xl p-6 bg-card hover:shadow-2xl hover:shadow-primary/10 transition-all hover:-translate-y-2 hover:border-primary/50 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl group-hover:from-primary/20 transition-all" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">03</span>
            </div>
            <h3 className="mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all">
              International Collaborations
            </h3>
            <p className="text-muted-foreground mb-4">
              Partnered with leading institutions to bring innovative exhibitions and 
              educational programs to wider audiences.
            </p>
            <p className="text-sm text-muted-foreground">Various Institutions, 2022-2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
