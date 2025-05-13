
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/assets/bdts.png" 
                alt="BDT Logo" 
                className="h-12 mr-3"
              />
              <span className="font-bold text-xl">Basel Dynamics</span>
            </div>
            <p className="text-gray-400 mb-6">
              IT Built to Perfection. Innovative technology solutions tailored to transform your business.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-bdt-orange"></span>
            </h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-bdt-orange transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-bdt-orange transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-bdt-orange transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-bdt-orange transition-colors">Services</a></li>
              <li><a href="#careers" className="text-gray-400 hover:text-bdt-orange transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-bdt-orange transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-bdt-orange"></span>
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-bdt-orange transition-colors">Software Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bdt-orange transition-colors">Mobile App Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bdt-orange transition-colors">Cloud Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bdt-orange transition-colors">Database Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bdt-orange transition-colors">IT Infrastructure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bdt-orange transition-colors">IT Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Get in Touch
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-bdt-orange"></span>
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Tech Park, Electronics City</li>
              <li>Bangalore, Karnataka 560100</li>
              <li>India</li>
              <li className="pt-2">info@baseldynamics.com</li>
              <li>+91 80 1234 5678</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Basel Dynamics Tech Solutions. All rights reserved.
          </div>
          
          <div className="flex space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-bdt-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-bdt-orange transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-bdt-orange transition-colors">Cookie Policy</a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-bdt-orange p-3 rounded-full text-white shadow-lg hover:bg-bdt-orange-light transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
