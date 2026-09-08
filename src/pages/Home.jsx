import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import AboutPreview from "../components/home/AboutPreview";
import ServicesList from "../components/home/ServicesList";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Projects from "../components/home/Projects";
import Clients from "../components/home/Clients";

export default function Home() {
  return (
    <>

      {/* Hero */}
      <Hero />

      {/* Statistics */}
      <Stats />

      {/* About */}
      <AboutPreview />

      {/* Services */}
      <ServicesList />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Projects */}
      <Projects />

      {/* Clients */}
      <Clients />

    </>
  );
}