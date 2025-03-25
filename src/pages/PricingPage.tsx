
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import QuoteCalculator from '@/components/ui/QuoteCalculator';
import { Link } from 'react-router-dom';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';

type Package = {
  name: string;
  description: string;
  price: number;
  features: string[];
  popular?: boolean;
};

const packages: Package[] = [
  {
    name: 'Basic Package',
    description: 'Perfect for small businesses and personal websites',
    price: 99999,
    features: [
      'Custom Design',
      'Up to 5 Pages',
      'Mobile Responsive',
      'Contact Form',
      'Basic SEO',
      '1 Month Support',
    ],
  },
  {
    name: 'Advanced Package',
    description: 'Ideal for growing businesses and professional sites',
    price: 199999,
    features: [
      'Premium Custom Design',
      'Up to 10 Pages',
      'Mobile Responsive',
      'Contact Form',
      'Advanced SEO Setup',
      'Blog Integration',
      'Social Media Integration',
      '3 Months Support',
    ],
    popular: true,
  },
  {
    name: 'E-Commerce Package',
    description: 'Complete solution for online stores',
    price: 349999,
    features: [
      'Premium Custom Design',
      'Up to 15 Pages',
      'Product Catalog (up to 50 products)',
      'Payment Gateway Integration',
      'Shopping Cart',
      'Order Management',
      'Customer Accounts',
      'Advanced SEO',
      '6 Months Support',
    ],
  },
  {
    name: 'Business Cards',
    description: 'Digital and physical business card solutions',
    price: 24999,
    features: [
      'Professional Card Design',
      'Digital Business Card',
      'Print-Ready Files',
      'NFC Integration Option',
      'QR Code Integration',
      'Social Media Links',
      '2 Revision Rounds',
    ],
  },
  {
    name: 'NFC Services',
    description: 'Smart contactless solutions for your business',
    price: 39999,
    features: [
      'NFC Card/Tag Setup',
      'Digital Profile Creation',
      'Contact Information Integration',
      'Social Media Integration',
      'Analytics Dashboard',
      'Easy Update System',
      '3 Months Technical Support',
    ],
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

const PricingPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Transparent Pricing</h1>
              <p className="text-lg text-muted-foreground mb-4">
                Choose the perfect web development package for your needs with our straightforward pricing.
              </p>
              <p className="text-muted-foreground">
                Need a custom solution? Use our quote calculator below or <Link to="/contact" className="text-primary underline">contact us</Link> directly.
              </p>
            </div>
          </div>
        </section>
        
        {/* Pricing Packages */}
        <section className="section">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div 
                  key={index}
                  className={`flex flex-col h-full glass ${
                    pkg.popular ? 'ring-2 ring-primary scale-[1.02] relative z-10' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-0 right-0 flex justify-center">
                      <span className="bg-primary text-primary-foreground text-sm px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-medium mb-2">{pkg.name}</h3>
                    <p className="text-muted-foreground mb-4">{pkg.description}</p>
                    <div className="text-3xl font-light mb-6">{formatPrice(pkg.price)}</div>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 pt-0 mt-auto">
                    <Link 
                      to="/contact" 
                      className={`w-full inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 transition-colors ${
                        pkg.popular
                          ? 'bg-primary text-primary-foreground shadow hover:bg-primary/90'
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {/* FAQ */}
            <div className="mt-20">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-light tracking-tight mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">
                  Find answers to common questions about our pricing and services.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="flex gap-3">
                    <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Do you offer payment plans?</h3>
                      <p className="text-muted-foreground">
                        Yes, we offer flexible payment plans. Typically, we require a 50% deposit to begin work, with the remaining balance due upon project completion.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex gap-3">
                    <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">What's included in the support period?</h3>
                      <p className="text-muted-foreground">
                        Our support includes bug fixes, minor updates, and technical assistance. It does not include major new features or redesigns.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex gap-3">
                    <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Can I upgrade my package later?</h3>
                      <p className="text-muted-foreground">
                        Absolutely! You can upgrade to a more comprehensive package at any time. We'll apply your existing investment toward the new package.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex gap-3">
                    <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Do you offer ongoing maintenance?</h3>
                      <p className="text-muted-foreground">
                        Yes, we offer monthly maintenance plans starting at ₹6,999/month that include regular updates, security patches, and technical support.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex gap-3">
                    <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">What if I need additional pages?</h3>
                      <p className="text-muted-foreground">
                        Additional pages beyond the package limits can be added for ₹9,999 per page, depending on complexity.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex gap-3">
                    <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">How long does a website take to build?</h3>
                      <p className="text-muted-foreground">
                        Most projects take 4-8 weeks from start to finish, depending on the complexity and client feedback timeframes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quote Calculator */}
        <section className="section bg-secondary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-light tracking-tight mb-4">Custom Quote Calculator</h2>
              <p className="text-muted-foreground">
                Build your own custom package and get an instant estimate using our interactive calculator.
              </p>
            </div>
            
            <QuoteCalculator />
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                Ready to Discuss Your Project?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Contact us today to get started with your web development project or to request a custom quote.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium h-12 px-6 py-3 bg-white text-primary shadow hover:bg-white/90 transition-colors"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PricingPage;
