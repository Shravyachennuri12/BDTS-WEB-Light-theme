
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'about', 'services', 'careers', 'contact'];
      
      // Check if scrolled for header styling
      setScrolled(window.scrollY > 50);
      
      // Find the current section
      let currentSection = 'home';
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white bg-opacity-95 shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/8721a55e-b2dc-4fe2-9280-17a1f6d67863.png" 
            alt="BDT Logo" 
            className="h-12 md:h-14"
          />
          <span className={cn(
            "ml-2 font-bold text-lg md:text-xl transition-colors duration-300",
            scrolled ? "text-bdt-dark" : "text-bdt-dark"
          )}>Basel Dynamic Tech Solutions</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { id: 'home', label: 'Home' },
            { id: 'products', label: 'Products' },
            { id: 'about', label: 'About Us' },
            { id: 'services', label: 'Services' },
            { id: 'careers', label: 'Careers' },
            { id: 'contact', label: 'Contact Us' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="md:hidden">
          {/* Mobile menu button */}
          <button className="text-bdt-dark p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* Mobile menu - normally this would be in a conditional render */}
          <div className="hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-6">
            {[
              { id: 'home', label: 'Home' },
              { id: 'products', label: 'Products' },
              { id: 'about', label: 'About Us' },
              { id: 'services', label: 'Services' },
              { id: 'careers', label: 'Careers' },
              { id: 'contact', label: 'Contact Us' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 nav-link"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
