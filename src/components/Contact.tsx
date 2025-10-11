import { Mail, Linkedin, Instagram, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useState } from 'react';

export function Contact() {

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="mb-4">Get in Touch</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          I'd love to hear from you. Whether you're interested in curatorial services, 
          art education programs, or potential collaborations, please feel free to reach out.
        </p>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Direct Contact */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
          <h2 className="text-3xl font-bold mb-6">Contact Alexandra</h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Ready to start your art education journey? Get in touch directly with Alexandra.
          </p>
          
          <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 border border-primary/20">
            <h3 className="text-xl font-semibold mb-4">Email Alexandra Directly</h3>
                 <a 
                   href="mailto:alexandra@cherali.art" 
                   className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                 >
                   alexandra@cherali.art
                 </a>
            <p className="text-sm text-muted-foreground mt-2">
              Click the email above to open your email client
            </p>
          </div>
        </div>

        {/* Additional Contact Information */}
        <div className="mt-12">
          <h2 className="mb-6">Connect With Alexandra</h2>
          
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
                   <a href="mailto:alexandra@cherali.art" className="text-foreground hover:text-primary transition-colors">alexandra@cherali.art</a>
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
