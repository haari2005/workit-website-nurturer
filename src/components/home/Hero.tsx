
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const words = ['Websites', 'E-Commerce', 'Web Apps', 'Landing Pages'];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('animate-fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('opacity-0');
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setAnimationClass('animate-fade-in');
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <span className="inline-block text-sm font-medium bg-primary/10 text-primary px-4 py-1 rounded-full">
              Web Development Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
              Building Digital Success with Exceptional{' '}
              <span className={`inline-block text-primary ${animationClass}`}>
                {words[currentWordIndex]}
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We craft modern, responsive websites that help businesses stand out and succeed online. 
              Our passion for innovative design and cutting-edge technology drives every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link to="/contact" className="btn-primary px-6 py-3 h-auto text-base">
                Get a Quote
              </Link>
              <Link to="/portfolio" className="btn-secondary px-6 py-3 h-auto text-base flex items-center justify-center">
                View Our Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] w-full">
            <div className="absolute top-0 right-0 w-full h-full">
              <div className="relative w-full h-full glass animate-float overflow-hidden rounded-2xl">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="w-20 h-5 bg-primary/10 rounded"></div>
                      <div className="w-40 h-6 bg-primary/20 rounded"></div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="w-full h-8 bg-primary/10 rounded"></div>
                    <div className="w-3/4 h-8 bg-primary/10 rounded"></div>
                    <div className="w-5/6 h-8 bg-primary/10 rounded"></div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="w-full h-20 bg-primary/5 rounded"></div>
                    <div className="flex justify-end">
                      <div className="w-24 h-8 bg-primary/20 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-12 -left-10 w-40 h-40 glass rounded-2xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-orange-500/10"></div>
              </div>
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div className="w-full h-4 bg-primary/10 rounded"></div>
                <div>
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/5 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-10 -left-6 w-32 h-32 glass rounded-2xl animate-float" style={{ animationDelay: '2s' }}>
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-bl from-green-500/10 to-teal-500/10"></div>
              </div>
              <div className="absolute inset-0 p-3 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="w-6 h-6 rounded-full bg-primary/10"></div>
                </div>
                <div className="space-y-1">
                  <div className="w-full h-3 bg-primary/10 rounded"></div>
                  <div className="w-3/4 h-3 bg-primary/10 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
