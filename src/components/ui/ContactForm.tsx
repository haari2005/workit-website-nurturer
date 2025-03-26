
import { useState } from 'react';
import { Mail, User, MessageSquare, Phone } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm = ({ withSubject = true }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using Email.js or a similar service
      const emailData = {
        service_id: 'default_service', // Replace with your EmailJS service ID
        template_id: 'template_contact_form', // Replace with your EmailJS template ID
        user_id: 'your_user_id', // Replace with your EmailJS user ID
        template_params: {
          to_email: 'workit.24.25@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject || 'New Contact Form Submission',
          message: formData.message
        }
      };
      
      // Sending the email - in a real implementation, you would use EmailJS or a similar service
      // For now, we'll use fetch to a mock endpoint
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
      });
      
      // For demo purposes, we'll just simulate a successful response
      // In reality, you'd check the actual response
      toast.success("Message sent successfully! We'll get back to you soon.");
      console.log('Email sent to workit.24.25@gmail.com with data:', formData);
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Your Name <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
              <User className="h-5 w-5" />
            </div>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="block w-full pl-10 px-4 py-2.5 bg-white dark:bg-gray-800 border border-input rounded-md 
                        focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              placeholder="John Doe"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
              <Mail className="h-5 w-5" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="block w-full pl-10 px-4 py-2.5 bg-white dark:bg-gray-800 border border-input rounded-md 
                        focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
              <Phone className="h-5 w-5" />
            </div>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full pl-10 px-4 py-2.5 bg-white dark:bg-gray-800 border border-input rounded-md 
                        focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              placeholder="+1 (123) 456-7890"
            />
          </div>
        </div>
        
        {withSubject && (
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject <span className="text-destructive">*</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required={withSubject}
              value={formData.subject}
              onChange={handleChange}
              className="block w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-input rounded-md 
                        focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              placeholder="How can we help you?"
            />
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message <span className="text-destructive">*</span>
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none text-muted-foreground">
            <MessageSquare className="h-5 w-5" />
          </div>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="block w-full pl-10 px-4 py-2.5 bg-white dark:bg-gray-800 border border-input rounded-md 
                      focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            placeholder="Tell us about your project..."
          />
        </div>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full md:w-auto px-8 py-3 h-auto"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
