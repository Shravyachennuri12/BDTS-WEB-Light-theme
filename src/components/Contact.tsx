
import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto reveal">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="reveal">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-gray-100 rounded-full mr-4">
                  <MapPin className="w-5 h-5 text-bdt-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Our Office</h4>
                  <p className="text-gray-600">
                    6th Floor,Suit.No:10, Gamma Block Sigma Soft Tech Park<br />
                   Ramagondanahalli, Whitefield, Bengaluru, Karnataka 560066<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-gray-100 rounded-full mr-4">
                  <Mail className="w-5 h-5 text-bdt-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email Us</h4>
                  <p className="text-gray-600">
                    info@baseldynamics.com<br />
                    support@baseldynamics.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-gray-100 rounded-full mr-4">
                  <Phone className="w-5 h-5 text-bdt-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Call Us</h4>
                  <p className="text-gray-600">
                    +91 80 1234 5678<br />
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-3 bg-gray-100 rounded-full hover:bg-bdt-orange hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-gray-100 rounded-full hover:bg-bdt-orange hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-gray-100 rounded-full hover:bg-bdt-orange hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-gray-100 rounded-full hover:bg-bdt-orange hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="reveal" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bdt-orange focus:border-transparent" 
                  placeholder="John Doe" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bdt-orange focus:border-transparent" 
                  placeholder="john@example.com" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bdt-orange focus:border-transparent" 
                  placeholder="How can we help you?" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bdt-orange focus:border-transparent" 
                  placeholder="Your message..." 
                  required 
                ></textarea>
              </div>
              
              <div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        
    <div className="mt-16 h-96 w-full rounded-lg overflow-hidden shadow-md reveal">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d62211.44857783821!2d77.7409744!3d12.9580555!3m2!1i1024!2i768!4f13.1!2m1!1sbasel%20dynamics%20tech%20solutions!5e0!3m2!1sen!2sin!4v1747114798396!5m2!1sen!2sin"
    width="100%"
    height="100%"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full h-full border-0"
  ></iframe>
</div>

      </div>
    </section>
  );
};

export default Contact;
