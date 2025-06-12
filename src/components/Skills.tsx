
import { Check } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["PHP", "JavaScript", "Node.js"],
  },
  {
    title: "Frameworks/CMS",
    skills: ["Magento", "Laravel", "WordPress", "Next.js"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "Jira", "PhpStorm", "VS Code"],
  },
  {
    title: "APIs",
    skills: ["RESTful API", "GraphQL"],
  },
  {
    title: "Microsoft Power Platform",
    skills: ["Power Apps", "Power Automate", "Power BI"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-800 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold text-navy-800 mb-4 border-b border-gray-200 pb-2">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2 text-gray-700">
                    <Check size={16} className="text-blue-600" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
