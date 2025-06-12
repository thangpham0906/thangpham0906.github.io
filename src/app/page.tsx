"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      // Observer for revealing elements on scroll
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            }
          });
        },
        { threshold: 0.1 }
      );

      // Observe all elements with the 'reveal' class
      const revealElements = document.querySelectorAll(".reveal");
      revealElements.forEach((el) => {
        observer.observe(el);
      });

      // Cleanup observer on component unmount
      return () => {
        revealElements.forEach((el) => {
          observer.unobserve(el);
        });
      };
    }
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
