import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1631288140270-a1d4f68ff381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBnYWxsZXJ5fGVufDF8fHx8MTc2MDAyMjgwMnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Contemporary Dialogues Exhibition',
    description: 'Main gallery installation featuring works exploring the intersection of traditional and contemporary practices.',
    exhibition: 'Contemporary Dialogues, 2024',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1723974591057-ccadada1f283?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnQlMjBleGhpYml0aW9ufGVufDF8fHx8MTc2MDExOTk3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Modern Art Installation',
    description: 'Curated exhibition space showcasing modern artistic interpretations and experimental forms.',
    exhibition: 'Emerging Voices, 2023',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1544550822-2889088fc7ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nJTIwbXVzZXVtfGVufDF8fHx8MTc2MDExMTkxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Abstract Expressions',
    description: 'Collection of abstract works demonstrating innovative approaches to color, form, and composition.',
    exhibition: 'Contemporary Dialogues, 2024',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1758923530331-73f1e65abb8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBpbnN0YWxsYXRpb24lMjBkaXNwbGF5fGVufDF8fHx8MTc2MDExOTk3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Interactive Installation',
    description: 'Immersive art installation creating dynamic dialogue between space, light, and viewer.',
    exhibition: 'New Perspectives, 2023',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1735605918526-747d15c6363e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3VscHR1cmUlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbnxlbnwxfHx8fDE3NjAxMTk5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Sculptural Forms',
    description: 'Three-dimensional works exploring materiality, space, and contemporary sculptural practice.',
    exhibition: 'Institutional Collaboration Series, 2024',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1759398010837-f75f9454fb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnR3b3JrJTIwZGlzcGxheXxlbnwxfHx8fDE3NjAxMTk5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Contemporary Artwork Display',
    description: 'Carefully curated presentation highlighting the depth and diversity of contemporary artistic practice.',
    exhibition: 'Emerging Voices, 2023',
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="mb-4">Visual Gallery</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          A curated selection of images from recent exhibitions and curatorial projects, 
          showcasing the diversity and depth of contemporary art practice.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="group cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-[4/3] bg-muted rounded-xl overflow-hidden mb-3 border-2 border-border group-hover:border-primary/50 transition-all group-hover:shadow-xl group-hover:shadow-primary/10">
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="mb-1 group-hover:text-primary transition-colors">{image.title}</h3>
            <p className="text-sm text-muted-foreground">{image.exhibition}</p>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-3 rounded-full bg-card border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <div
            className="max-w-5xl w-full animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[16/10] bg-muted rounded-2xl overflow-hidden mb-4 border-2 border-primary/30 shadow-2xl">
              <ImageWithFallback
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-6">
              <h2 className="mb-2 text-primary">{selectedImage.title}</h2>
              <p className="text-muted-foreground mb-3">{selectedImage.description}</p>
              <p className="text-sm text-muted-foreground">{selectedImage.exhibition}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
