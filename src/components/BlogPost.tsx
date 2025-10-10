import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { Button } from './ui/button';

// Full blog post data with complete content
const blogPostsData = [
  {
    id: 1,
    title: 'The Evolution of Contemporary Curatorial Practice',
    excerpt: 'Exploring how curatorial approaches have transformed in the digital age and what this means for the future of exhibitions.',
    date: 'October 5, 2025',
    readTime: '8 min read',
    category: 'Curatorial Practice',
    content: `
      <p>The role of the curator has undergone a profound transformation over the past two decades. What was once primarily focused on selection and display has evolved into a complex practice that encompasses digital curation, community engagement, and critical discourse.</p>

      <h2>The Digital Revolution</h2>
      <p>The advent of digital technologies has fundamentally altered how we conceive, create, and experience exhibitions. Virtual galleries, augmented reality installations, and online viewing rooms have expanded the possibilities of curatorial practice beyond the physical walls of museums and galleries.</p>

      <p>This shift has not merely been about technology adoption—it represents a fundamental rethinking of what an exhibition can be. Curators now work across multiple platforms simultaneously, creating experiences that blend physical and digital elements in innovative ways.</p>

      <h2>Community-Centered Curation</h2>
      <p>Contemporary curatorial practice increasingly emphasizes collaboration and community involvement. Rather than positioning the curator as an authoritative voice, we're seeing a move toward co-creation with artists, communities, and audiences.</p>

      <p>This participatory approach challenges traditional hierarchies and opens up new possibilities for how exhibitions are conceived and experienced. It requires curators to develop new skills in facilitation, dialogue, and collaborative creation.</p>

      <h2>The Future of Curatorial Work</h2>
      <p>Looking ahead, I believe curatorial practice will continue to evolve in several key directions. Environmental sustainability will become increasingly central to how we design and execute exhibitions. The integration of emerging technologies like AI and machine learning will create new curatorial tools and possibilities.</p>

      <p>Most importantly, the role of the curator as a bridge-builder—connecting artists, institutions, communities, and audiences—will only grow in importance. In an increasingly fragmented world, the ability to create meaningful connections through art has never been more vital.</p>

      <h2>Conclusion</h2>
      <p>The evolution of curatorial practice reflects broader changes in how we understand art, institutions, and public engagement. By embracing new technologies, collaborative approaches, and community-centered practices, curators can create exhibitions that are more accessible, engaging, and meaningful than ever before.</p>
    `,
  },
  {
    id: 2,
    title: 'Making Art Accessible: Education in the Modern Museum',
    excerpt: 'Strategies for creating inclusive and engaging art education programs that resonate with diverse audiences.',
    date: 'September 28, 2025',
    readTime: '6 min read',
    category: 'Art Education',
    content: `
      <p>Art museums have traditionally been perceived as exclusive spaces, accessible only to those with specialized knowledge or cultural capital. Breaking down these barriers through effective education programs is one of the most important challenges facing cultural institutions today.</p>

      <h2>Rethinking Accessibility</h2>
      <p>Accessibility in art education goes far beyond physical access. It encompasses linguistic accessibility, cultural relevance, economic accessibility, and intellectual engagement at multiple levels. Creating truly inclusive programs requires us to think deeply about who our audiences are and what barriers might prevent their engagement.</p>

      <p>In my work developing education programs, I've found that the most successful initiatives are those that meet people where they are—both literally and figuratively. This might mean bringing art education into community centers, schools, and public spaces, rather than expecting everyone to come to the museum.</p>

      <h2>Interactive Learning Approaches</h2>
      <p>Traditional lecture-based approaches to art education are giving way to more interactive, hands-on methodologies. Workshop formats, creative activities, and dialogue-based sessions allow participants to engage with art in personal and meaningful ways.</p>

      <p>Technology also plays a crucial role. Mobile apps, interactive displays, and digital resources can provide multiple entry points for learning, accommodating different learning styles and levels of prior knowledge.</p>

      <h2>Building Cultural Bridges</h2>
      <p>Effective art education recognizes and celebrates cultural diversity. Programs should reflect the backgrounds and experiences of diverse communities, featuring artists and artworks that speak to varied cultural perspectives.</p>

      <p>This means actively working to diversify exhibition programming, partnering with community organizations, and ensuring that educational materials are available in multiple languages and formats.</p>

      <h2>Measuring Impact</h2>
      <p>How do we know if our education programs are successful? Beyond attendance numbers, we need to consider qualitative measures of engagement, feedback from participants, and long-term impacts on how people relate to art.</p>

      <p>Regular evaluation and iteration are essential. The best programs evolve continuously based on participant feedback and changing community needs.</p>
    `,
  },
  {
    id: 3,
    title: 'Emerging Voices: Supporting New Artists in Contemporary Art',
    excerpt: 'The importance of platforms and opportunities for emerging artists and how curators can facilitate their growth.',
    date: 'September 15, 2025',
    readTime: '7 min read',
    category: 'Artist Development',
    content: `
      <p>The contemporary art world can be challenging for emerging artists to navigate. As curators, we have a responsibility to create pathways and opportunities that support artistic development while maintaining rigorous standards of quality and innovation.</p>

      <h2>The Challenges Facing Emerging Artists</h2>
      <p>Early-career artists face numerous obstacles: limited exhibition opportunities, financial constraints, lack of institutional support, and difficulty accessing professional networks. The COVID-19 pandemic exacerbated many of these challenges, making it even harder for new voices to be heard.</p>

      <p>Additionally, the art world's traditional gatekeeping structures can be particularly difficult for artists from underrepresented backgrounds to navigate. Creating more equitable systems requires conscious effort and institutional commitment.</p>

      <h2>Curatorial Strategies for Support</h2>
      <p>Through my curatorial work, I've developed several strategies for supporting emerging artists. First, creating dedicated exhibition platforms for early-career work provides crucial visibility and validation. These don't need to be in major institutional spaces—sometimes alternative venues can be more appropriate and accessible.</p>

      <p>Mentorship programs connecting emerging artists with established practitioners offer invaluable guidance and networking opportunities. I've seen how these relationships can transform an artist's trajectory and confidence.</p>

      <h2>Building Sustainable Careers</h2>
      <p>Supporting emerging artists means thinking beyond single exhibitions to consider long-term career development. This includes providing opportunities for professional development, facilitating connections with collectors and gallerists, and offering practical guidance on navigating the art world.</p>

      <p>Educational workshops on topics like pricing work, writing artist statements, and applying for grants can make a significant difference in helping artists build sustainable practices.</p>

      <h2>The Role of Institutions</h2>
      <p>Museums and galleries have a particular responsibility to support emerging voices. This might include acquisition programs for early-career work, residency opportunities, or commissioning projects that allow artists to develop new work with institutional support.</p>

      <p>By investing in emerging artists, institutions not only support individual careers but also contribute to the vitality and diversity of the broader art ecosystem.</p>
    `,
  },
  {
    id: 4,
    title: 'The Role of Institutional Partnerships in Art',
    excerpt: 'How collaborative efforts between institutions can create more impactful exhibitions and educational programs.',
    date: 'September 1, 2025',
    readTime: '5 min read',
    category: 'Collaboration',
    content: `
      <p>In an era of limited resources and increasing pressure to demonstrate public value, institutional partnerships have become essential to the cultural sector. When done well, collaborations between museums, galleries, and cultural organizations can produce results far greater than any single institution could achieve alone.</p>

      <h2>The Benefits of Collaboration</h2>
      <p>Institutional partnerships offer numerous advantages. Shared resources—financial, human, and material—allow for more ambitious projects. Combined expertise brings diverse perspectives and skills to bear on curatorial challenges. Expanded networks provide access to new audiences and communities.</p>

      <p>Perhaps most importantly, collaborations can help institutions avoid duplication of effort, allowing each organization to focus on its particular strengths while benefiting from partners' complementary capabilities.</p>

      <h2>Models of Partnership</h2>
      <p>Successful institutional partnerships can take many forms. Exhibition collaborations might involve co-curation, shared loans, or touring exhibitions. Educational partnerships could include joint programming, shared educational resources, or collaborative research projects.</p>

      <p>Some of the most innovative partnerships I've been involved with have crossed traditional institutional boundaries—for example, collaborations between art museums and science centers, or between galleries and universities.</p>

      <h2>Challenges and Solutions</h2>
      <p>Of course, partnerships also present challenges. Different institutional cultures, competing priorities, and logistical complexities can create friction. Clear communication, well-defined roles and responsibilities, and shared goals are essential to overcoming these obstacles.</p>

      <p>Building trust takes time. The most successful long-term partnerships are those that start small, demonstrate value, and evolve gradually based on mutual respect and shared success.</p>

      <h2>Looking Forward</h2>
      <p>As the cultural sector continues to evolve, I believe institutional partnerships will become even more important. By working together, institutions can better serve their communities, create more impactful programs, and ensure the continued vitality of the arts.</p>
    `,
  },
  {
    id: 5,
    title: 'Digital Exhibitions: Challenges and Opportunities',
    excerpt: 'Navigating the transition to digital and hybrid exhibition formats while maintaining artistic integrity and visitor engagement.',
    date: 'August 20, 2025',
    readTime: '9 min read',
    category: 'Digital Art',
    content: `
      <p>The rapid shift to digital exhibitions during the pandemic forced cultural institutions to rethink fundamental assumptions about how art is experienced. While initially a response to necessity, digital exhibitions have revealed new possibilities for curatorial practice that extend far beyond emergency measures.</p>

      <h2>The Digital Exhibition Landscape</h2>
      <p>Digital exhibitions come in many forms: virtual gallery tours, online viewing rooms, augmented reality experiences, and born-digital exhibitions that exist only in virtual space. Each format presents unique opportunities and constraints for curators and audiences.</p>

      <p>The key challenge is creating digital experiences that feel purposeful and engaging rather than merely being substitutes for physical exhibitions. The most successful digital projects embrace the medium's unique affordances rather than trying to replicate the museum experience online.</p>

      <h2>Maintaining Artistic Integrity</h2>
      <p>One concern often raised about digital exhibitions is whether they can truly convey the power and presence of artworks. While it's true that digital reproductions cannot fully capture the materiality of physical objects, they can offer other kinds of experiences.</p>

      <p>Close-up views revealing details invisible to gallery visitors, contextual information integrated seamlessly into the viewing experience, and the ability to revisit exhibitions multiple times—these are genuine advantages of digital formats.</p>

      <h2>Engaging Digital Audiences</h2>
      <p>Digital exhibitions have the potential to reach far broader audiences than physical exhibitions. They eliminate geographical barriers, reduce economic barriers to access, and can accommodate visitors with various accessibility needs.</p>

      <p>However, reaching these audiences requires thoughtful design. Digital exhibitions must be intuitive to navigate, accessible across devices and platforms, and engaging enough to hold attention in our distraction-filled online environment.</p>

      <h2>The Hybrid Future</h2>
      <p>Rather than viewing digital and physical exhibitions as competing formats, I believe the future lies in hybrid approaches that integrate both. Physical exhibitions might be enhanced with digital components that provide additional context and engagement opportunities. Digital exhibitions might create communities of viewers who subsequently visit physical spaces.</p>

      <p>The goal is not to replace one with the other, but to create richer, more multifaceted experiences that serve diverse audiences and contexts.</p>

      <h2>Technical and Creative Challenges</h2>
      <p>Creating effective digital exhibitions requires new skills and resources. Curators must become conversant with digital platforms, user experience design, and online engagement strategies. Institutions need to invest in technology infrastructure and digital expertise.</p>

      <p>These challenges are real, but they also open up exciting creative possibilities. As digital tools become more sophisticated and accessible, we'll see increasingly innovative approaches to digital curation.</p>
    `,
  },
  {
    id: 6,
    title: 'Building Meaningful Connections Through Art',
    excerpt: 'How art can serve as a bridge for dialogue, understanding, and community building in an increasingly fragmented world.',
    date: 'August 5, 2025',
    readTime: '6 min read',
    category: 'Community Engagement',
    content: `
      <p>In our increasingly polarized and fragmented society, the arts offer unique opportunities for building connections, fostering understanding, and creating shared experiences. As curators and arts educators, we have a responsibility to facilitate these connections.</p>

      <h2>Art as Common Ground</h2>
      <p>Art has a remarkable ability to bring together people from diverse backgrounds. A powerful artwork can speak across differences of culture, language, and experience, creating moments of shared humanity and common feeling.</p>

      <p>This doesn't mean that art should avoid difficult or divisive topics—quite the opposite. Art can create safe spaces for engaging with challenging subjects, providing ways to process complex emotions and ideas that might be difficult to discuss otherwise.</p>

      <h2>Curating for Connection</h2>
      <p>Creating exhibitions that foster connection requires intentionality. This might mean designing spaces that encourage conversation, incorporating interactive elements that prompt reflection and dialogue, or organizing related programming that brings people together.</p>

      <p>I've found that some of the most meaningful moments in exhibitions happen not in front of individual artworks, but in the interactions between visitors—the conversations sparked, the shared reactions, the collective experience of being present together.</p>

      <h2>Community-Engaged Practice</h2>
      <p>Community engagement in the arts goes beyond simply inviting communities to view exhibitions. True engagement means involving communities in the curatorial process itself—from concept development through installation and programming.</p>

      <p>This collaborative approach requires curators to relinquish some traditional authority and embrace shared decision-making. It can be challenging, but the results are often exhibitions that resonate more deeply with audiences and create lasting connections between institutions and communities.</p>

      <h2>Measuring Success</h2>
      <p>How do we measure success in building connections through art? Traditional metrics like attendance numbers tell us only part of the story. We also need to consider qualitative impacts: the conversations sparked, the relationships formed, the ways people's perspectives shift.</p>

      <p>Some of the most meaningful outcomes may not be immediately visible. A connection made in a gallery might lead to ongoing dialogue, new friendships, or changed attitudes that only manifest over time.</p>

      <h2>The Role of Arts Institutions</h2>
      <p>Museums and galleries can serve as vital public spaces—places where people from different walks of life can encounter each other and share experiences. In an era where so much of our interaction is mediated by technology and takes place in echo chambers, these physical spaces of encounter are increasingly important.</p>

      <p>By consciously cultivating their role as gathering places and platforms for dialogue, arts institutions can contribute to social cohesion and community building in ways that extend far beyond their traditional educational missions.</p>
    `,
  },
];

export function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = blogPostsData.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The blog post you're looking for doesn't exist.
        </p>
        <Link to="/blog">
          <Button>Back to Blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <button
        onClick={() => navigate('/blog')}
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </button>

      {/* Post Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border border-primary/30">
            <Tag size={14} />
            {post.category}
          </span>
        </div>
        
        <h1 className="mb-4 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-6 text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-primary/50 via-accent/50 to-transparent" />
      </div>

      {/* Post Content */}
      <article 
        className="prose prose-lg max-w-none
          prose-headings:bg-gradient-to-r prose-headings:from-primary prose-headings:to-accent prose-headings:bg-clip-text prose-headings:text-transparent
          prose-p:text-foreground prose-p:leading-relaxed
          prose-h2:mt-12 prose-h2:mb-4
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-strong:text-foreground
          prose-ul:text-foreground
          prose-ol:text-foreground"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Post Footer */}
      <div className="mt-16 pt-8 border-t border-border">
        <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
          <h3 className="mb-3">Enjoyed this article?</h3>
          <p className="text-muted-foreground mb-6">
            Subscribe to my newsletter to receive more insights on contemporary art, curatorial practice, and art education.
          </p>
          <Link to="/blog">
            <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/20">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
