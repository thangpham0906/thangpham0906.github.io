
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "SECOMM",
    period: "2023–Present",
    role: "Senior Backend Developer",
    description: "Leading backend development for e-commerce platforms using Magento, Laravel, and WordPress. Implementing Microsoft Power Apps solutions for business process automation.",
    technologies: ["Magento", "Laravel", "WordPress", "Power Apps"],
  },
  {
    company: "Wiki Solution",
    period: "2022",
    role: "Backend Developer",
    description: "Delivered multiple Magento projects, developed custom APIs, and provided technical support to customers. Improved system performance and implemented security best practices.",
    technologies: ["Magento", "RESTful API", "PHP", "MySQL"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-800 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row gap-6 mb-10 pb-10 reveal ${
                index !== experiences.length - 1 ? "border-b border-gray-200" : ""
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="md:w-1/4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                    <Briefcase size={18} />
                  </div>
                  <span className="font-medium text-blue-600">{exp.period}</span>
                </div>
              </div>
              
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-navy-800 mb-1">{exp.company}</h3>
                <h4 className="text-lg text-navy-700 mb-3">{exp.role}</h4>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
