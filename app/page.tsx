import React from "react";
import BasicInfo from "./components/homepage/BasicInfo";
import About from "./components/homepage/About";
import Experiences from "./components/homepage/Experiences";
import Skills from "./components/homepage/Skills";
import Portfolio from "./components/homepage/Portfolio";
import Footer from "./components/Footer";
import CTA from "./components/homepage/CTA";
import Navbar from "./components/Navbar";
import MainLayout from "./components/MainLayout";

function Home() {
  return (
    <>
      <MainLayout>
        <BasicInfo />
        <About />
        <Experiences />
        <Skills />
        <Portfolio />
        <CTA />
      </MainLayout>
    </>
  );
}

export default Home;
