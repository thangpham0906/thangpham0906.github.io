import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Image from "next/image"; // Import Next.js Image component
import Avatar from "@images/avata.jpg"; // Adjust the path as necessary

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-lg font-semibold text-blue-600 mb-2">
                Hello, I&#39;m
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-800 mb-4">
                PHAM QUOC THANG
              </h1>
              <h2 className="text-xl md:text-2xl text-navy-700 mb-6">
                Backend Developer
              </h2>
              <p className="text-gray-600 text-lg max-w-lg mb-8">
                4+ years of experience in scalable backend systems. Specialized in Node.js, 
                Magento, and Microsoft Power Platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="flex items-center gap-2">
                  <a href="/PHAM_QUOC_THANG_CV.pdf" download>
                    <Download size={18} />
                    Download CV
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#contact" className="flex items-center gap-2">
                    <Mail size={18} />
                    Contact Me
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
                {/* Replace with actual profile image */}
                <Image
                  src={Avatar}
                  alt="PHAM QUOC THANG - Backend Developer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-lg py-3 px-5 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <span className="text-navy-800 font-medium">4+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
