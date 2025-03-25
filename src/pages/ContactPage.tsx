
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Get in Touch</h1>
              <p className="text-lg text-muted-foreground">
                Have a question or ready to start your project? We'd love to hear from you!
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="section">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3 order-2 lg:order-1">
                <h2 className="text-2xl font-light mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
              
              <div className="lg:col-span-2 order-1 lg:order-2">
                <h2 className="text-2xl font-light mb-6">Contact Information</h2>
                
                <div className="glass p-6 mb-6">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Our Location</h3>
                        <p className="text-muted-foreground">
                          123 Web Street<br />
                          Digital City, Internet State 12345<br />
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Email Us</h3>
                        <a href="mailto:info@workit.com" className="text-primary hover:underline">
                          info@workit.com
                        </a>
                        <p className="text-muted-foreground text-sm mt-1">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Call Us</h3>
                        <a href="tel:+11234567890" className="text-primary hover:underline">
                          +1 (123) 456-7890
                        </a>
                        <p className="text-muted-foreground text-sm mt-1">
                          Monday to Friday, 9am-5pm EST
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 5:00 PM EST<br />
                          Saturday & Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="glass p-6">
                  <h3 className="text-xl font-medium mb-4">Request a Quote</h3>
                  <p className="text-muted-foreground mb-4">
                    Want to get a personalized quote for your project? Fill out our contact form or use our
                    pricing calculator.
                  </p>
                  <a 
                    href="/pricing" 
                    className="btn-primary block text-center"
                  >
                    Use Quote Calculator
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="section bg-secondary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-light tracking-tight mb-4">Find Us</h2>
              <p className="text-muted-foreground">
                Visit our office for a face-to-face consultation
              </p>
            </div>
            
            <div className="h-[400px] rounded-lg overflow-hidden">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Map would be displayed here</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
