import React from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TrustedSection from "./components/TrustedSection";
import Services from "./components/Services";
import About from "./components/About";
import WhyRegisterKaro from "./components/WhyRegisterKaro";
import VideoIntroductions from "./components/VideoIntroductions";
import HappyClients from "./components/HappyClients";
import ProcessSteps from "./components/ProcessSteps";
import BlogGrid from "./components/BlogGrid";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import AppPromotion from "./components/AppPromotion";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Logos from "./components/Logos";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Header />
      <TrustedSection />
      <Services />
      <About />
      <WhyRegisterKaro />
      <VideoIntroductions />
      <HappyClients />
      <ProcessSteps />
      <BlogGrid />
      <Testimonials />
      <FAQ />
      <AppPromotion />
      <Stats />
      <CTA />
      <Logos />
      <Footer />
    </div>
  );
}

export default App;
