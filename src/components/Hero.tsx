
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  const scrollToNextSection = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background with parallax effect */}
      <div ref={parallaxRef} className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-tr from-white via-gray-50 to-gray-100 opacity-50"></div>
        
        {/* Abstract shapes */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-gradient-to-tr from-bdt-orange-light to-bdt-gold-light opacity-10"></div>
        <div className="absolute -left-40 top-40 w-96 h-96 rounded-full bg-gradient-to-br from-bdt-gold-light to-bdt-orange-light opacity-10"></div>
      </div>

      {/* Content with animation */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="flex flex-col items-center justify-center space-y-6">
          <img 
            src="/lovable-uploads/8721a55e-b2dc-4fe2-9280-17a1f6d67863.png" 
            alt="BDT Logo" 
            className="w-36 md:w-48 lg:w-56 animate-float"
          />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="gradient-text">Basel Dynamics</span> <br />
            Tech Solutions
          </h1>
          
          <p className="text-xl md:text-2xl font-semibold mt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            IT Built to <span className="gradient-text">Perfection</span>
          </p>
          
          <p className="max-w-xl text-gray-600 mt-6 text-lg animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Innovative technology solutions tailored to transform your business. We deliver cutting-edge software, cloud services, and IT infrastructure that drive growth and efficiency.
          </p>
          
          <div className="mt-8 flex space-x-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <button className="btn-primary">
              Discover Solutions
            </button>
            <button className="btn-secondary">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToNextSection}
      >
        <ArrowDown className="text-bdt-orange h-8 w-8" />
      </div>
    </section>
  );
};

export default Hero;
