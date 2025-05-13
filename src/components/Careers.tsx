
import React, { useEffect } from 'react';
import { Briefcase, Check, MapPin } from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: "Senior Software Developer",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    requirements: [
      "5+ years experience in software development",
      "Proficiency in Java, Python, or C#",
      "Experience with microservices architecture"
    ]
  },
  {
    id: 2,
    title: "UX/UI Designer",
    department: "Product Design",
    location: "Remote",
    type: "Full-time",
    requirements: [
      "3+ years experience in UX/UI design",
      "Proficiency in Figma and Adobe Creative Suite",
      "Experience designing enterprise applications"
    ]
  },
  {
    id: 3,
    title: "Cloud Solutions Architect",
    department: "Infrastructure",
    location: "Hyderabad, India",
    type: "Full-time",
    requirements: [
      "AWS, Azure, or GCP certification",
      "Experience designing scalable cloud architectures",
      "Strong knowledge of security best practices"
    ]
  },
  {
    id: 4,
    title: "Project Manager",
    department: "Operations",
    location: "Mumbai, India",
    type: "Full-time",
    requirements: [
      "PMP certification",
      "5+ years in IT project management",
      "Experience with Agile methodologies"
    ]
  }
];

const Careers: React.FC = () => {
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
    <section id="careers" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto reveal">
          Join Our <span className="gradient-text">Team</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="reveal">
            <h3 className="text-2xl font-bold mb-4">Why Work With Us</h3>
            <p className="text-gray-600 mb-6">
              At Basel Dynamics, we believe in creating an environment where innovation thrives and talent is nurtured. Join a team of passionate professionals working on cutting-edge technology projects.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start">
                <div className="p-2 bg-bdt-orange rounded-full text-white mr-4">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Professional Growth</h4>
                  <p className="text-gray-600">Continuous learning opportunities and career advancement paths</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-bdt-orange rounded-full text-white mr-4">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Work-Life Balance</h4>
                  <p className="text-gray-600">Flexible work arrangements and respect for personal time</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-bdt-orange rounded-full text-white mr-4">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Inclusive Culture</h4>
                  <p className="text-gray-600">Diverse and supportive environment where all voices are valued</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-bdt-orange rounded-full text-white mr-4">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Competitive Benefits</h4>
                  <p className="text-gray-600">Health insurance, retirement plans, and performance bonuses</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="reveal" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-4">Current Openings</h3>
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="flex items-center mb-2">
                    <Briefcase className="text-bdt-orange mr-2" />
                    <h4 className="text-lg font-semibold">{job.title}</h4>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <span>{job.department}</span>
                    <span className="mx-2">•</span>
                    <span>{job.type}</span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-1">Requirements:</p>
                    <ul className="text-sm text-gray-600">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center mb-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-bdt-orange mr-1.5"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="text-bdt-orange font-medium hover:underline text-sm">
                    View Job Details
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <button className="btn-primary">
                View All Openings
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
