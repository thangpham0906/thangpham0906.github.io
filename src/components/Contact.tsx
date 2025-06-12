
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission to a backend service here
    console.log("Form submitted:", formData);

    emailjs
      .send(
        'service_34uy9vf',     // Your Service ID
        'template_51qynh8',   // Your Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'UR2BIR7u4mnGFJvms'    // Your Public Key
      )
      .then(
        (result) => {
          console.log(result);
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
        },
        (error) => {
          console.log('Failed to send email: ' + error.text);
        }
      );

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section-padding bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-800 mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="reveal" style={{ transitionDelay: "0.1s" }}>
            <h3 className="text-xl font-semibold text-navy-800 mb-6">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-navy-800">Email</h4>
                  <a
                    href="mailto:quocthangpham961997@gmail.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    quocthangpham961997@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-navy-800">Phone</h4>
                  <a
                    href="tel:+84329472899"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    +84 329 472 899
                  </a>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <a
                  href="https://github.com/thangpham0906/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/thang-pham-118a6412b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.3s" }}>
            <Card className="shadow-sm">
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
