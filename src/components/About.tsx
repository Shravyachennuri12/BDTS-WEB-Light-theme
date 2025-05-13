
import React, { useEffect } from 'react';

const timelineData = [
  {
    year: "2015",
    title: "Company Founded",
    description: "Basel Dynamics was founded with a vision to deliver innovative tech solutions."
  },
  {
    year: "2017",
    title: "Growth & Expansion",
    description: "Expanded our team and opened our first international office."
  },
  {
    year: "2019",
    title: "Major Milestones",
    description: "Reached 100+ enterprise clients and launched our flagship products."
  },
  {
    year: "2021",
    title: "Innovation Awards",
    description: "Received multiple industry awards for technological innovation."
  },
  {
    year: "Present",
    title: "Global Presence",
    description: "Now operating in multiple countries with a diverse team of tech experts."
  }
];

const About: React.FC = () => {
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
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto reveal">
          About <span className="gradient-text">Us</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="reveal">
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4">
              Basel Dynamics Tech Solutions began with a simple yet powerful vision: to create technology that makes a difference. Founded in 2015 by a team of experienced IT professionals, we set out to develop solutions that address real-world challenges faced by businesses.
            </p>
            <p className="text-gray-600 mb-6">
              Today, we are a leading provider of enterprise-grade technology solutions with a global footprint and a reputation for excellence and innovation.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h4 className="gradient-text text-4xl font-bold">500+</h4>
                <p className="text-gray-600">Clients Worldwide</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h4 className="gradient-text text-4xl font-bold">200+</h4>
                <p className="text-gray-600">IT Professionals</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h4 className="gradient-text text-4xl font-bold">15+</h4>
                <p className="text-gray-600">Countries Served</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h4 className="gradient-text text-4xl font-bold">98%</h4>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
          
          <div className="reveal" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-4">Our Journey</h3>
            <div className="ml-4">
              {timelineData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="mb-1 text-bdt-orange font-bold">{item.year}</div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="reveal card" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-bold mb-3 text-center">Our Mission</h3>
            <p className="text-gray-600 text-center">
              To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage.
            </p>
          </div>
          
          <div className="reveal card" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-bold mb-3 text-center">Our Vision</h3>
            <p className="text-gray-600 text-center">
              To be the global leader in creating transformative technology that shapes the future of industries worldwide.
            </p>
          </div>
          
          <div className="reveal card" style={{ animationDelay: "0.5s" }}>
            <h3 className="text-xl font-bold mb-3 text-center">Our Values</h3>
            <ul className="space-y-1 text-center">
              <li className="text-gray-600">Innovation in Everything</li>
              <li className="text-gray-600">Customer Success First</li>
              <li className="text-gray-600">Integrity & Transparency</li>
              <li className="text-gray-600">Continuous Improvement</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
