import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image"; // Import Next.js Image component
import SkyPremiumImage from "@images/SkyPremium.png"; // Import your image here
import LABFintechImage from "@images/LABFintech.jpg"; // Import your image here
import SecondsDealsImage from "@images/SecondsDeals.jpg"; // Import your image here

const projects = [
  {
    title: "Sky Premium (Magento EE)",
    description: "Developed mobile API, implemented CRM synchronization, built GraphQL endpoints, and integrated OneSignal push notifications.",
    image: SkyPremiumImage,
    technologies: ["Magento EE", "GraphQL", "OneSignal", "API Integration"],
  },
  {
    title: "LAB Fintech",
    description: "Built Power Platform solutions including BI dashboards and automated workflows for financial operations.",
    image: LABFintechImage,
    technologies: ["Power Platform", "Power BI", "Power Automate", "Dashboard Design"],
  },
  {
    title: "Seconds Deals",
    description: "Integrated third-party shipping APIs and enhanced frontend experiences for an e-commerce platform.",
    image: SecondsDealsImage,
    technologies: ["API Integration", "Frontend Enhancement", "E-commerce", "Shipping"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-800 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-navy-800">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description.replace("e-commerce platform's", "e-commerce platform&#39;s")}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    {tech}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
