import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { UISamples } from "./pages/UISamples";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";

import { NotFound } from "./pages/NotFound";

import { PageTitleUpdater } from './utils/PageTitleUpdater'

import "./App.css";

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
