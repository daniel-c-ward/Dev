import { Navbar } from "./components/Navbar.tsx";
import { Home } from "./pages/Home.tsx";
import { Portfolio } from "./pages/Portfolio.tsx";
import { UISamples } from "./pages/UISamples.tsx";
import { Projects } from "./pages/Projects.tsx";
import { Contact } from "./pages/Contact.tsx";
import { Footer } from "./components/Footer.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { PageTitleUpdater } from "./utils/PageTitleUpdater.tsx";

import { Routes, Route } from "react-router-dom";

import "./App.css" 

function App() {
  return (
    <>
      <PageTitleUpdater />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/ui-samples" element={<UISamples />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
