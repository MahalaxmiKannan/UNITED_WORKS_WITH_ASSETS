import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Career from "./pages/Career";
import Contact from "./pages/Contact";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <HashRouter>
      <div className="bg-white font-sans min-h-screen w-full">
        <Header onContactClick={handleOpenContact} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </main>
        <Footer onContactClick={handleOpenContact} />
      </div>
      <Contact isOpen={isContactOpen} onClose={handleCloseContact} />
    </HashRouter>
  );
}

export default App;
