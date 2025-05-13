
import React, { useEffect } from 'react';
import { Server, Database, Cloud, Code } from 'lucide-react';

const productData = [
  {
    id: 1,
    title: "DynamicFlow",
    icon: <Database className="w-12 h-12 text-bdt-orange" />,
    description: "Enterprise-grade database management system with real-time analytics and intelligent optimization.",
    features: ["Scalable Architecture", "Real-time Monitoring", "AI-powered Optimization"]
  },
  {
    id: 2,
    title: "CloudNex",
    icon: <Cloud className="w-12 h-12 text-bdt-orange" />,
    description: "Cloud infrastructure solution providing secure, scalable environments for demanding workloads.",
    features: ["Multi-cloud Support", "Auto-scaling", "99.9% Uptime"]
  },
  {
    id: 3,
    title: "CodeMatrix",
    icon: <Code className="w-12 h-12 text-bdt-orange" />,
    description: "Advanced development platform with integrated CI/CD pipeline and comprehensive testing tools.",
    features: ["Automated Testing", "Version Control", "Collaboration Tools"]
  },
  {
    id: 4,
    title: "ServerShield",
    icon: <Server className="w-12 h-12 text-bdt-orange" />,
    description: "Next-generation server security solution with intrusion detection and automated threat response.",
    features: ["Threat Intelligence", "Compliance Management", "Zero-day Protection"]
  }
];

const Products: React.FC = () => {
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
    <section id="products" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto reveal">
          Our <span className="gradient-text">Products</span>
        </h2>
        
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 reveal">
          Discover our suite of innovative technology solutions designed to enhance your business operations and drive digital transformation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productData.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card card reveal" 
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="product-image flex justify-center mb-4">
                {product.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-center">{product.title}</h3>
              
              <p className="text-gray-600 mb-4 text-center">{product.description}</p>
              
              <ul className="space-y-2 mb-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-bdt-orange mr-2"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-center mt-auto">
                <button className="text-bdt-orange font-medium hover:underline">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
