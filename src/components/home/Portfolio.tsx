
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Bloom E-Commerce Platform',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2076',
    description: 'A modern online store with advanced filtering and payment integration.',
    link: '/portfolio',
  },
  {
    id: 'project-2',
    title: 'Altitude Fitness',
    category: 'Fitness',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070',
    description: 'Membership portal and class scheduling system for a boutique gym.',
    link: '/portfolio',
  },
  {
    id: 'project-3',
    title: 'Culinary Delights',
    category: 'Food & Beverage',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981',
    description: 'Recipe blog and online ordering system for a gourmet food service.',
    link: '/portfolio',
  },
];

const filters = ['All', 'E-Commerce', 'Business', 'Fitness', 'Food & Beverage'];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section id="portfolio" className="section">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Our Recent Work</h2>
          <p className="text-muted-foreground text-lg">
            Browse through our portfolio of successful web development projects.
          </p>
        </div>
        
        <div className="flex justify-center mb-8 overflow-x-auto pb-2">
          <div className="flex space-x-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  activeFilter === filter
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary text-foreground hover:bg-primary/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-item group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Link 
                    to={project.link}
                    className="text-white flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Project <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="p-6 bg-white border border-t-0 border-border rounded-b-lg">
                <div className="mb-2">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Link to="/portfolio" className="btn-primary inline-flex items-center">
            View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
