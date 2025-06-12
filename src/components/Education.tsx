
import { School, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-800 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-100 border border-gray-100 rounded-lg p-6 shadow-sm reveal">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <School className="text-blue-600 h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy-800">Ton Duc Thang University</h3>
                <p className="text-gray-600">BSc in Information Technology</p>
              </div>
            </div>
            
            <div className="flex items-center text-gray-600 mb-4">
              <Calendar className="h-5 w-5 mr-2" />
              <span>2015–2020</span>
            </div>
            
            <p className="text-gray-700">
              During my studies, I gained a strong foundation in computer science principles, 
              database management, and software development methodologies. I participated in several 
              group projects focused on web application development and graduated with a strong 
              academic record.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
