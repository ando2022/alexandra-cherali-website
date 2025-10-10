import { Download, FileText } from 'lucide-react';
import { Button } from './ui/button';

export function Portfolio() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="mb-4">Curatorial Portfolio</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Explore my comprehensive portfolio showcasing curated exhibitions, collaborative 
          projects, and institutional partnerships.
        </p>
      </div>

      {/* PDF Download Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-accent/20 to-primary/5 rounded-2xl p-8 mb-12 border-2 border-primary/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="bg-card p-4 rounded-xl border-2 border-primary/30 shadow-lg">
            <FileText size={48} className="text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="mb-2">Complete Portfolio PDF</h2>
            <p className="text-muted-foreground mb-4">
              Download my comprehensive curatorial portfolio including detailed project 
              descriptions, exhibition visuals, collaborator information, and exhibition data.
            </p>
            <Button size="lg" className="shadow-lg shadow-primary/20">
              <Download size={16} className="mr-2" />
              Download Portfolio (PDF)
            </Button>
          </div>
        </div>
      </div>

      {/* Embedded Portfolio Preview */}
      <div className="mb-12">
        <h2 className="mb-6">Portfolio Highlights</h2>
        <div className="space-y-8">
          <div className="border border-border rounded-lg p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h3 className="mb-3">Contemporary Dialogues: Past Meets Present</h3>
                <p className="text-muted-foreground mb-4">
                  A comprehensive exhibition exploring the dialogue between historical art 
                  movements and contemporary artistic practices. This project involved 
                  collaboration with 12 international artists and was hosted at the Zurich 
                  Art Museum.
                </p>
                <div className="space-y-2 text-sm">
                  <p><span className="text-foreground">Location:</span> Zurich Art Museum</p>
                  <p><span className="text-foreground">Duration:</span> March - June 2024</p>
                  <p><span className="text-foreground">Artists:</span> 12 International Artists</p>
                  <p><span className="text-foreground">Visitors:</span> 15,000+</p>
                </div>
              </div>
              <div className="flex items-center justify-center bg-muted rounded-lg p-6">
                <FileText size={64} className="text-muted-foreground" />
              </div>
            </div>
          </div>

          <div className="border border-border rounded-lg p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h3 className="mb-3">Emerging Voices: New Perspectives in Art</h3>
                <p className="text-muted-foreground mb-4">
                  A platform for emerging artists to showcase their work, this exhibition 
                  series focused on providing visibility to underrepresented voices in the 
                  contemporary art scene.
                </p>
                <div className="space-y-2 text-sm">
                  <p><span className="text-foreground">Location:</span> Cultural Center Zurich</p>
                  <p><span className="text-foreground">Duration:</span> September - November 2023</p>
                  <p><span className="text-foreground">Artists:</span> 8 Emerging Artists</p>
                  <p><span className="text-foreground">Programs:</span> 5 Educational Workshops</p>
                </div>
              </div>
              <div className="flex items-center justify-center bg-muted rounded-lg p-6">
                <FileText size={64} className="text-muted-foreground" />
              </div>
            </div>
          </div>

          <div className="border border-border rounded-lg p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h3 className="mb-3">Institutional Collaborations</h3>
                <p className="text-muted-foreground mb-4">
                  Strategic partnerships with leading institutions to develop innovative 
                  curatorial projects, educational programs, and community engagement 
                  initiatives.
                </p>
                <div className="space-y-2 text-sm">
                  <p><span className="text-foreground">Partners:</span> 6 International Institutions</p>
                  <p><span className="text-foreground">Duration:</span> 2022 - Present</p>
                  <p><span className="text-foreground">Projects:</span> 15+ Collaborative Exhibitions</p>
                  <p><span className="text-foreground">Impact:</span> 50,000+ Total Visitors</p>
                </div>
              </div>
              <div className="flex items-center justify-center bg-muted rounded-lg p-6">
                <FileText size={64} className="text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-gradient-to-br from-accent/30 to-primary/10 rounded-xl p-8 border border-border">
        <h3 className="mb-3 text-primary">Looking for More Information?</h3>
        <p className="text-muted-foreground mb-4">
          For detailed project documentation, exhibition catalogs, or to discuss potential 
          collaborations, please feel free to reach out.
        </p>
        <Button variant="outline" size="lg">Contact Me</Button>
      </div>
    </div>
  );
}
