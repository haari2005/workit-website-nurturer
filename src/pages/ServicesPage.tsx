
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, ShoppingBag, Paintbrush, Search, CreditCard, Smartphone, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'custom-dev',
    title: 'Custom Web Development',
    description: 'Tailor-made websites built with your specific goals and audience in mind.',
    icon: Code,
    color: 'from-blue-500/20 to-indigo-500/20',
    features: [
      'Custom design and user experience',
      'Responsive for all devices',
      'Performance optimized',
      'Search engine friendly structure',
      'Integration with third-party services',
      'Content management system',
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Development',
    description: 'Powerful online stores that drive sales and create seamless shopping experiences.',
    icon: ShoppingBag,
    color: 'from-green-500/20 to-emerald-500/20',
    features: [
      'Product catalog and inventory management',
      'Secure payment gateway integration',
      'Customer account management',
      'Order processing and tracking',
      'Product search and filtering',
      'Mobile-optimized shopping experience',
    ],
  },
  {
    id: 'redesign',
    title: 'Website Redesign',
    description: 'Transform your outdated site into a modern, high-performing digital presence.',
    icon: Paintbrush,
    color: 'from-purple-500/20 to-violet-500/20',
    features: [
      'Modern design update',
      'Improved user experience',
      'Enhanced mobile responsiveness',
      'Performance optimization',
      'Content migration and organization',
      'SEO preservation and improvement',
    ],
  },
  {
    id: 'seo',
    title: 'SEO & Performance',
    description: 'Optimize your site for search engines and enhance loading speeds for better results.',
    icon: Search,
    color: 'from-orange-500/20 to-amber-500/20',
    features: [
      'Technical SEO audit and fixes',
      'On-page optimization',
      'Site speed enhancements',
      'Mobile optimization',
      'Schema markup implementation',
      'Analytics setup and tracking',
    ],
  },
  {
    id: 'business-cards',
    title: 'Business Cards',
    description: 'Professional digital and physical business cards designed to make lasting impressions.',
    icon: CreditCard,
    color: 'from-yellow-500/20 to-amber-500/20',
    features: [
      'Custom design to match your brand',
      'High-quality printing options',
      'Digital business card solutions',
      'QR code integration',
      'Eco-friendly material options',
      'Quick turnaround time',
    ],
  },
  {
    id: 'nfc',
    title: 'NFC Services',
    description: 'Smart NFC solutions for contactless sharing of information and digital business cards.',
    icon: Smartphone,
    color: 'from-pink-500/20 to-rose-500/20',
    features: [
      'NFC-enabled business cards',
      'Contactless information sharing',
      'Easy profile updates',
      'Analytics and tracking capabilities',
      'Compatible with all NFC-enabled devices',
      'Eco-friendly digital alternative',
    ],
  },
];

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Our Services</h1>
              <p className="text-lg text-muted-foreground mb-8">
                From custom web development to NFC solutions, we offer comprehensive services
                to meet all your digital needs.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center px-6 py-3 h-auto">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="section">
          <div className="container-custom">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="space-y-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <service.icon className="h-8 w-8 text-foreground" />
                    </div>
                    <h2 className="text-3xl font-light">{service.title}</h2>
                    <p className="text-lg text-muted-foreground">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Link to="/contact" className="btn-primary">
                        Request This Service
                      </Link>
                    </div>
                  </div>
                  
                  <div className={`glass p-8 h-full ${index % 2 === 1 ? 'md:order-first' : ''}`}>
                    <div className="aspect-square relative rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                      <service.icon className="h-32 w-32 text-primary/20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                We can create tailored web development solutions to meet your specific requirements.
                Contact us to discuss your project and get a personalized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium h-12 px-6 py-3 bg-white text-primary shadow hover:bg-white/90 transition-colors">
                  Contact Us
                </Link>
                <Link to="/pricing" className="inline-flex items-center justify-center rounded-md text-sm font-medium h-12 px-6 py-3 bg-transparent border border-white text-white hover:bg-white/10 transition-colors">
                  View Pricing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
