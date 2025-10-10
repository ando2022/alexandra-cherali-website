import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'The Evolution of Contemporary Curatorial Practice',
    excerpt: 'Exploring how curatorial approaches have transformed in the digital age and what this means for the future of exhibitions.',
    date: 'October 5, 2025',
    readTime: '8 min read',
    category: 'Curatorial Practice',
  },
  {
    id: 2,
    title: 'Making Art Accessible: Education in the Modern Museum',
    excerpt: 'Strategies for creating inclusive and engaging art education programs that resonate with diverse audiences.',
    date: 'September 28, 2025',
    readTime: '6 min read',
    category: 'Art Education',
  },
  {
    id: 3,
    title: 'Emerging Voices: Supporting New Artists in Contemporary Art',
    excerpt: 'The importance of platforms and opportunities for emerging artists and how curators can facilitate their growth.',
    date: 'September 15, 2025',
    readTime: '7 min read',
    category: 'Artist Development',
  },
  {
    id: 4,
    title: 'The Role of Institutional Partnerships in Art',
    excerpt: 'How collaborative efforts between institutions can create more impactful exhibitions and educational programs.',
    date: 'September 1, 2025',
    readTime: '5 min read',
    category: 'Collaboration',
  },
  {
    id: 5,
    title: 'Digital Exhibitions: Challenges and Opportunities',
    excerpt: 'Navigating the transition to digital and hybrid exhibition formats while maintaining artistic integrity and visitor engagement.',
    date: 'August 20, 2025',
    readTime: '9 min read',
    category: 'Digital Art',
  },
  {
    id: 6,
    title: 'Building Meaningful Connections Through Art',
    excerpt: 'How art can serve as a bridge for dialogue, understanding, and community building in an increasingly fragmented world.',
    date: 'August 5, 2025',
    readTime: '6 min read',
    category: 'Community Engagement',
  },
];

export function Blog() {
  const [email, setEmail] = useState('');

  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    try {
      const response = await fetch(`https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/make-server-b97bd89f/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert('✅ Thank you for subscribing to my newsletter! You will receive updates on art exhibitions, education programs, and curatorial insights.');
        setEmail('');
      } else {
        throw new Error(result.error || 'Failed to subscribe');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      alert(`❌ Error subscribing: ${error.message}\n\nPlease try again.`);
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Insights, reflections, and discussions on contemporary art, curatorial practice, 
          and art education.
        </p>
      </div>

      {/* Newsletter Subscription */}
      <div className="relative bg-gradient-to-br from-primary/10 via-accent/20 to-primary/5 rounded-2xl p-8 md:p-12 mb-12 border border-primary/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="relative max-w-2xl">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full mb-4">
            Stay Connected
          </div>
          <h2 className="mb-3">Subscribe to My Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Get the latest articles, exhibition updates, and art education insights delivered 
            directly to your inbox. Join a community of art enthusiasts and professionals.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
            <div className="flex-1">
              <Label htmlFor="newsletter-email" className="sr-only">
                Email address
              </Label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background/80 backdrop-blur-sm"
              />
            </div>
            <Button type="submit" size="lg" disabled={isSubscribing} className="shadow-lg shadow-primary/20 disabled:opacity-50">
              {isSubscribing ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
          >
            <article className="group border border-border rounded-xl p-6 bg-card hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1 cursor-pointer hover:border-primary/30 h-full">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm group-hover:bg-primary/20 transition-colors">
                  {post.category}
                </span>
              </div>
              
              <h3 className="mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                Read More
                <ArrowRight size={16} />
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Featured Topics */}
      <div className="mt-16 border-t border-border pt-12">
        <h2 className="mb-6">Topics I Write About</h2>
        <div className="flex flex-wrap gap-3">
          {[
            'Curatorial Practice',
            'Art Education',
            'Contemporary Art',
            'Exhibition Design',
            'Artist Development',
            'Museum Studies',
            'Community Engagement',
            'Digital Art',
            'Art History',
            'Cultural Partnerships',
          ].map((topic) => (
            <button
              key={topic}
              className="px-4 py-2 border border-border rounded-full hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
