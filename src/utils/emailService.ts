
/**
 * Email service utility for sending emails
 * In a production environment, this would connect to a real email service API
 */

interface EmailData {
  to: string;
  subject: string;
  body: string;
  from?: string;
}

// This is a mock function that simulates sending an email
// In production, you would use a real email service API
export const sendEmail = async (data: EmailData): Promise<boolean> => {
  console.log('Sending email with data:', data);
  
  try {
    // Simulate API call to email service
    // In reality, this would make a fetch request to your email service API
    await new Promise(resolve => setTimeout(resolve, 500)); // simulate network delay
    
    // Log the email that would be sent
    console.log(`Email would be sent from: ${data.from || 'no-reply@workit.com'}`);
    console.log(`Email would be sent to: ${data.to}`);
    console.log(`Subject: ${data.subject}`);
    console.log(`Body: ${data.body}`);
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export const sendQuoteEmail = async (quoteData: any): Promise<boolean> => {
  const { selectedPackage, selectedOptions, totalPrice } = quoteData;
  
  // Format the options for email
  const formattedOptions = selectedOptions
    .map((option: string) => `  - ${option}`)
    .join('\n');
  
  // Format price as INR
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(totalPrice);
  
  // Create email body
  const body = `
New Quote Request

Package: ${selectedPackage}
Total Price: ${formattedPrice}
Selected Options:
${formattedOptions}

This quote was generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}.
  `;
  
  return sendEmail({
    to: 'workit.24.25@gmail.com',
    subject: 'New Quote Request',
    body
  });
};
