
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <a href="#home" className="text-xl font-bold">
              <span className="text-blue-400">Victor</span>Pham
            </a>
            <p className="mt-2 text-gray-400">Backend Developer</p>
          </div>
          
          <div className="flex gap-4 mt-6 md:mt-0">
            <a 
              href="https://github.com/thangpham0906" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-navy-700 p-2 rounded-full hover:bg-navy-600 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/thang-pham-118a6412b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-navy-700 p-2 rounded-full hover:bg-navy-600 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-navy-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} PHAM QUOC THANG. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2 md:mt-0">
            Built with React and TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
