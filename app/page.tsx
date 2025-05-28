import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className=" overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Education />
      <Experience />
      <Skills />
      <ContactMe />
      <Footer />
    </main>
  );
}

