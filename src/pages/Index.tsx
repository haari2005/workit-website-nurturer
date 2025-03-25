
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Portfolio from '@/components/home/Portfolio';
import About from '@/components/home/About';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        
        {/* Testimonials Section */}
        <section className="section bg-secondary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground text-lg">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass p-6">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-10 w-10 text-primary/40" />
                </div>
                <p className="text-muted-foreground mb-6">
                  "Working with WorkIt transformed our online presence. Their team understood our vision and delivered a website that exceeded our expectations. The site is beautiful, functional, and has significantly increased our conversions."
                </p>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">CEO, Bloom Boutique</p>
                </div>
              </div>
              
              <div className="glass p-6">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-10 w-10 text-primary/40" />
                </div>
                <p className="text-muted-foreground mb-6">
                  "The e-commerce platform built by WorkIt revolutionized our online sales. Their attention to detail and focus on user experience helped create a seamless shopping journey for our customers. Sales have increased by 40% since launch."
                </p>
                <div>
                  <p className="font-medium">Michael Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Owner, Urban Threads</p>
                </div>
              </div>
              
              <div className="glass p-6">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-10 w-10 text-primary/40" />
                </div>
                <p className="text-muted-foreground mb-6">
                  "As a small business owner, I needed a website that was professional but affordable. WorkIt delivered exactly that and more. Their ongoing support and maintenance have been invaluable to keeping our site running smoothly."
                </p>
                <div>
                  <p className="font-medium">Emily Chen</p>
                  <p className="text-sm text-muted-foreground">Founder, Organic Harvest</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                  Ready to Start Your Web Development Project?
                </h2>
                <p className="text-primary-foreground/80 text-lg">
                  Get in touch today to discuss your needs and learn how we can help you achieve your digital goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium h-12 px-6 py-3 bg-white text-primary shadow hover:bg-white/90 transition-colors">
                    Contact Us
                  </Link>
                  <Link to="/pricing" className="inline-flex items-center justify-center rounded-md text-sm font-medium h-12 px-6 py-3 bg-transparent border border-white text-white hover:bg-white/10 transition-colors">
                    View Pricing <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="glass !bg-white/10 !border-white/20 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4">Quick Contact</h3>
                <ContactForm withSubject={false} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
