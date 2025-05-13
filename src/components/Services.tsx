
import React, { useEffect } from 'react';
import { Code, Server, Smartphone, Cloud, Database, Users } from 'lucide-react';

const serviceData = [
  {
    id: 1,
    icon: <Code className="service-icon" />,
    title: "Custom Software Development",
    description: "End-to-end software development services tailored to your unique business requirements and goals."
  },
  {
    id: 2,
    icon: <Smartphone className="service-icon" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications with intuitive interfaces and robust functionality."
  },
  {
    id: 3,
    icon: <Cloud className="service-icon" />,
    title: "Cloud Services",
    description: "Comprehensive cloud solutions including migration, management, and optimization for all major platforms."
  },
  {
    id: 4,
    icon: <Database className="service-icon" />,
    title: "Database Management",
    description: "Expert database design, implementation, migration, and ongoing management services."
  },
  {
    id: 5,
    icon: <Server className="service-icon" />,
    title: "IT Infrastructure",
    description: "Scalable and secure infrastructure solutions designed to support your business operations."
  },
  {
    id: 6,
    icon: <Users className="service-icon" />,
    title: "IT Consulting",
    description: "Strategic technology consulting to help you leverage the right technologies for business growth."
  }
];

const Services: React.FC = () => {
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
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto reveal">
          Our <span className="gradient-text">Services</span>
        </h2>
        
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 reveal">
          We offer a comprehensive range of IT services to help your business thrive in the digital era.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card text-center reveal" 
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              <div className="flex justify-center">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              
              <button className="text-bdt-orange font-medium hover:underline">
                Learn More
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-bdt-orange to-bdt-gold rounded-lg p-8 text-center text-white reveal">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="mb-6 text-white/90">
            Our team of experts is ready to develop a tailored solution for your specific business needs.
          </p>
          <button className="bg-white text-bdt-orange px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Request a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
