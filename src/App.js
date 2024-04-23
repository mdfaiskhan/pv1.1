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
    
    <Routes>
     
      <Route path="/" element={<>
      <Header/>
      <Main/>
      <Companies/>
      <Exp/>
      <About/>
      <Skills/>
      <Qual/>
      <Project/>
      <Services/>
      <Contact/>
      <Footer/>
      </>}></Route>
      <Route path="/About" element={<><Header/><About/><Footer/></>}></Route>
      <Route path="/Service" element={<><Header/><Services/> <Footer/></>}></Route>
      <Route path="/Project" element={<><Header/><Testimonials/><Project/><Footer/></>}></Route>
      <Route path="/Skills" element={<><Header/><Testimonials/><Testimonials/><Skills  /><Footer/></>}></Route>
      <Route path="/Contact" element={<><Header/><Contact/><Footer/></>}></Route>

    </Routes>
    </>
  );
}

export default App;
