
import { CheckCircle, Users, Coffee, Code } from 'lucide-react';

const values = [
  {
    title: 'Client-Focused',
    description: 'We prioritize your goals and vision, ensuring every project meets your specific needs.',
    icon: Users,
  },
  {
    title: 'Quality Craftsmanship',
    description: 'We take pride in building websites with clean code and thoughtful design.',
    icon: Code,
  },
  {
    title: 'Collaborative Process',
    description: 'We work closely with you throughout the development process, maintaining open communication.',
    icon: Coffee,
  },
  {
    title: 'Results-Driven',
    description: 'We focus on creating websites that not only look great but also achieve your business objectives.',
    icon: CheckCircle,
  },
];

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block text-sm font-medium bg-primary/10 text-primary px-4 py-1 rounded-full">
              About WorkIt
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Building Digital Excellence With Purpose
            </h2>
            <p className="text-muted-foreground">
              At WorkIt, we're more than just web developers. We're strategic partners dedicated to 
              transforming your online presence into a powerful business asset. Our team combines 
              technical expertise with creative design to deliver websites that stand out and perform.
            </p>
            <p className="text-muted-foreground">
              With years of experience across diverse industries, we understand what it takes to create 
              digital experiences that engage visitors and convert them into customers. We're committed to 
              quality, innovation, and your success.
            </p>
            
            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-4 glass">
                <span className="text-3xl font-light text-primary mb-2">100+</span>
                <span className="text-sm text-center">Projects Completed</span>
              </div>
              <div className="flex flex-col items-center p-4 glass">
                <span className="text-3xl font-light text-primary mb-2">95%</span>
                <span className="text-sm text-center">Client Satisfaction</span>
              </div>
              <div className="flex flex-col items-center p-4 glass">
                <span className="text-3xl font-light text-primary mb-2">10+</span>
                <span className="text-sm text-center">Years Experience</span>
              </div>
              <div className="flex flex-col items-center p-4 glass">
                <span className="text-3xl font-light text-primary mb-2">24/7</span>
                <span className="text-sm text-center">Support Available</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-medium">Our Core Values</h3>
            <div className="grid grid-cols-1 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
