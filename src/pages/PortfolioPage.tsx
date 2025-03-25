
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ExternalLink, SearchIcon } from 'lucide-react';

type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
};

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Bloom E-Commerce Platform',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2076',
    description: 'A modern online store with advanced filtering, wishlist functionality, and secure payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
  },
  {
    id: 'project-2',
    title: 'Altitude Fitness',
    category: 'Fitness',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070',
    description: 'Membership portal and class scheduling system for a boutique gym with integrated payment processing.',
    technologies: ['React', 'Firebase', 'Stripe', 'Google Calendar API'],
    link: '#',
  },
  {
    id: 'project-3',
    title: 'Culinary Delights',
    category: 'Food & Beverage',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981',
    description: 'Recipe blog and online ordering system for a gourmet food service with nutrition calculation features.',
    technologies: ['WordPress', 'WooCommerce', 'Custom PHP', 'MySQL'],
    link: '#',
  },
  {
    id: 'project-4',
    title: 'Urban Architecture',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074',
    description: 'Portfolio website for an architecture firm featuring interactive 3D models and project showcases.',
    technologies: ['Vue.js', 'Three.js', 'AWS', 'Node.js'],
    link: '#',
  },
  {
    id: 'project-5',
    title: 'Travel Explorer',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070',
    description: 'Travel blog and booking platform with interactive maps and user-generated content.',
    technologies: ['React', 'Django', 'PostgreSQL', 'Mapbox API'],
    link: '#',
  },
  {
    id: 'project-6',
    title: 'Health Connect',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780',
    description: 'Patient portal for a healthcare provider with appointment scheduling and secure messaging.',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'Socket.io'],
    link: '#',
  },
];

const categories = ['All', 'E-Commerce', 'Business', 'Fitness', 'Food & Beverage', 'Travel', 'Healthcare'];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });
  
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Our Portfolio</h1>
              <p className="text-lg text-muted-foreground">
                Explore our collection of successful web development projects across various industries.
              </p>
            </div>
          </div>
        </section>
        
        {/* Portfolio Filter */}
        <section className="py-10 border-b">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex overflow-x-auto pb-2 md:pb-0">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors mr-2 ${
                      activeFilter === category
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary text-foreground hover:bg-primary/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                  <SearchIcon className="h-4 w-4" />
                </div>
                <input
                  type="search"
                  className="block w-full pl-10 px-4 py-2 bg-white border border-input rounded-md 
                            focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Portfolio Grid */}
        <section className="section">
          <div className="container-custom">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="portfolio-item group animate-fade-in">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <a 
                          href={project.link}
                          className="text-white flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Live Site <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                    <div className="p-6 bg-white border border-t-0 border-border rounded-b-lg">
                      <div className="mb-2">
                        <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="text-xs bg-secondary px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl mb-2">No projects found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioPage;
