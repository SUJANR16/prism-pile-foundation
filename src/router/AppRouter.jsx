import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import ServiceDetail from "../pages/ServiceDetail";
import Projects from "../pages/Projects";
import Gallery from "../pages/Gallery";
import Clients from "../pages/Clients";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import Quote from "../pages/Quote";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          {/* Main Services Page */}
          <Route path="/services" element={<Services />} />

          {/* Individual Service Pages */}
          <Route
            path="/services/:serviceId"
            element={<ServiceDetail />}
          />

          <Route path="/projects" element={<Projects />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/clients" element={<Clients />} />

          <Route path="/careers" element={<Careers />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/quote" element={<Quote />} />

        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}