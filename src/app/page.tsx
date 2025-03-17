import Hero from "../../Components/Hero";
import Header from "../../Components/Header";
import About from "../../Components/About";
import Project from "../../Components/Project";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <Header/>
      <div className="container mx-auto px-12 mt-20 py-4">
        <Hero />
        <About/>
        <Project/>
        <Contact/>
      </div>
      <Footer/>
      </main>
  );
}
