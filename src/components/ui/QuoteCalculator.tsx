
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { toast } from 'sonner';
import { sendQuoteEmail } from '@/utils/emailService';

type Package = {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  features: string[];
};

type Option = {
  id: string;
  name: string;
  price: number;
};

const packages: Package[] = [
  {
    id: 'basic',
    name: 'Basic Package',
    description: 'Perfect for small businesses and personal websites',
    basePrice: 99999,
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
    id: 'advanced',
    name: 'Advanced Package',
    description: 'Ideal for growing businesses and professional sites',
    basePrice: 199999,
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
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Package',
    description: 'Complete solution for online stores',
    basePrice: 349999,
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
    id: 'business-cards',
    name: 'Business Cards Package',
    description: 'Digital and physical business card solutions',
    basePrice: 24999,
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
    id: 'nfc',
    name: 'NFC Services Package',
    description: 'Smart contactless solutions for your business',
    basePrice: 39999,
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

const additionalOptions: Option[] = [
  { id: 'blog', name: 'Blog Section', price: 29999 },
  { id: 'logo', name: 'Logo Design', price: 19999 },
  { id: 'analytics', name: 'Analytics Setup', price: 12999 },
  { id: 'newsletter', name: 'Newsletter Integration', price: 14999 },
  { id: 'social', name: 'Social Media Integration', price: 12999 },
  { id: 'extra-pages', name: 'Additional 5 Pages', price: 34999 },
  { id: 'maintenance', name: '12 Month Maintenance', price: 69999 },
  { id: 'nfc-cards', name: 'NFC Business Cards (pack of 50)', price: 29999 },
  { id: 'qr-integration', name: 'QR Code Integration', price: 9999 },
];

const QuoteCalculator = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('basic');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  
  useEffect(() => {
    calculateTotal();
  }, [selectedPackage, selectedOptions]);
  
  const calculateTotal = () => {
    const basePackage = packages.find(pkg => pkg.id === selectedPackage);
    const basePrice = basePackage ? basePackage.basePrice : 0;
    
    const optionsPrice = selectedOptions.reduce((total, optionId) => {
      const option = additionalOptions.find(opt => opt.id === optionId);
      return total + (option ? option.price : 0);
    }, 0);
    
    setTotalPrice(basePrice + optionsPrice);
  };
  
  const toggleOption = (optionId: string) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter(id => id !== optionId));
    } else {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const finalizeQuote = async () => {
    setIsSaving(true);
    try {
      // Get the name of the selected package
      const selectedPackageDetails = packages.find(pkg => pkg.id === selectedPackage);
      
      // Get the names of the selected options
      const selectedOptionNames = selectedOptions.map(optionId => {
        const option = additionalOptions.find(opt => opt.id === optionId);
        return option ? option.name : '';
      });
      
      // Send email with quote data
      const emailSent = await sendQuoteEmail({
        selectedPackage: selectedPackageDetails?.name,
        selectedOptions: selectedOptionNames,
        totalPrice
      });
      
      if (emailSent) {
        toast.success("Quote finalized! We'll contact you soon.");
      } else {
        toast.error("Failed to finalize quote. Please try again or contact us directly.");
      }
    } catch (error) {
      console.error('Error finalizing quote:', error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };
  
  const saveQuote = () => {
    toast.success("Quote saved! You can access it from your account.");
  };
  
  const selectedPackageDetails = packages.find(pkg => pkg.id === selectedPackage);
  
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-2xl font-medium">Choose Your Package</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className={`glass p-6 cursor-pointer transition-all ${
                selectedPackage === pkg.id 
                  ? 'ring-2 ring-primary shadow-md scale-[1.02]' 
                  : 'hover:shadow-md hover:scale-[1.01]'
              }`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-medium">{pkg.name}</h4>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  selectedPackage === pkg.id ? 'bg-primary text-white' : 'border-2 border-muted-foreground'
                }`}>
                  {selectedPackage === pkg.id && <Check className="h-4 w-4" />}
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{pkg.description}</p>
              <div className="text-2xl font-light mb-4">{formatPrice(pkg.basePrice)}</div>
              <ul className="space-y-2">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-2xl font-medium">Additional Options</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {additionalOptions.map((option) => (
            <div 
              key={option.id}
              className={`p-4 border rounded-lg cursor-pointer transition-all ${
                selectedOptions.includes(option.id)
                  ? 'border-primary bg-primary/5 dark:bg-primary/10'
                  : 'border-input hover:border-primary/50'
              }`}
              onClick={() => toggleOption(option.id)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">{option.name}</h4>
                  <div className="text-muted-foreground">{formatPrice(option.price)}</div>
                </div>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  selectedOptions.includes(option.id) ? 'bg-primary text-white' : 'border-2 border-muted-foreground'
                }`}>
                  {selectedOptions.includes(option.id) && <Check className="h-4 w-4" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-secondary p-6 rounded-lg dark:bg-secondary/80">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="text-xl font-medium">Your Estimated Quote</h3>
            <p className="text-muted-foreground mb-4 md:mb-0">
              Based on {selectedPackageDetails?.name} and {selectedOptions.length} additional options
            </p>
          </div>
          <div className="text-3xl font-light">{formatPrice(totalPrice)}</div>
        </div>
        <div className="mt-6">
          <p className="text-sm text-muted-foreground mb-4">
            This is an estimate based on your selections. Contact us for a detailed quote and consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={finalizeQuote} 
              disabled={isSaving} 
              className="btn-primary inline-flex items-center justify-center"
            >
              {isSaving ? 'Processing...' : 'Finalize Quote'} {!isSaving && <ArrowRight className="ml-2 h-4 w-4" />}
            </button>
            <Link to="/contact" className="btn-secondary inline-flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCalculator;
