
import { Link } from 'react-router-dom';
import { Code, ShoppingBag, Paintbrush, Search, Wrench, ArrowRight, CreditCard, Smartphone } from 'lucide-react';

const services = [
  {
    id: 'custom-dev',
    title: 'Custom Web Development',
    description: 'Tailor-made websites built with your specific goals and audience in mind.',
    icon: Code,
    color: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Development',
    description: 'Powerful online stores that drive sales and create seamless shopping experiences.',
    icon: ShoppingBag,
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    id: 'redesign',
    title: 'Website Redesign',
    description: 'Transform your outdated site into a modern, high-performing digital presence.',
    icon: Paintbrush,
    color: 'from-purple-500/20 to-violet-500/20',
  },
  {
    id: 'business-cards',
    title: 'Business Cards',
    description: 'Professional digital and physical business cards designed to make lasting impressions.',
    icon: CreditCard,
    color: 'from-yellow-500/20 to-amber-500/20',
  },
  {
    id: 'nfc',
    title: 'NFC Services',
    description: 'Smart NFC solutions for contactless sharing of information and digital business cards.',
    icon: Smartphone,
    color: 'from-pink-500/20 to-rose-500/20',
  },
  {
    id: 'seo',
    title: 'SEO & Performance',
    description: 'Optimize your site for search engines and enhance loading speeds for better results.',
    icon: Search,
    color: 'from-orange-500/20 to-amber-500/20',
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'Keep your website secure, updated, and running smoothly with our ongoing support.',
    icon: Wrench,
    color: 'from-red-500/20 to-rose-500/20',
  },
];

const Services = () => {
  return (
    <section id="services" className="section bg-secondary">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            We offer comprehensive web development solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="service-card" data-aos="fade-up">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                <service.icon className="h-7 w-7 text-foreground" />
              </div>
              <h3 className="text-xl font-medium">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Link to="/services" className="btn-primary inline-flex items-center">
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
