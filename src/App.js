import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/1-header/Header";
import Testimonials from "./components/10-testimonials/Testimonials";
import Footer from "./components/11-footer/Footer";
import Contact from "./components/12-contact/Contact";
import Main from "./components/2-main-section/Main";
import Companies from "./components/3-companies/Companies";
import Exp from "./components/4-exp/Exp";
import About from "./components/5-about/About";
import Qual from "./components/6-qualification/Qual";
import Skills from "./components/7-skills/Skills";
import Project from "./components/8-project/Project";
import Services from "./components/9-services/Services";
import Contact2 from "./components/12-contact/Contact2";

function App() {
  return (
    <>
    <Router>
      <Header/>
      {/* <Header />
      <Main/>
      <Companies/>
      <Exp/>
      <About/>
      <Contact/>
      <Footer/> */}
   



      <Routes>
        <Route path="/" element={
          <>

         <Main/>
          <Companies/>
          <Exp/>
          <About/>
          {/* <Qual/> */}
          <Skills/>
          <Project/>
          <Services/>
          <Testimonials/>
          <Contact/></>
        } />
        <Route path="/companies" element={<Companies />} />
        <Route path="/experience" element={<Exp />} />
        <Route path="/about" element={<About />} />
        <Route path="/qualification" element={<Qual />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
   
    </>
  );
}

export default App;
