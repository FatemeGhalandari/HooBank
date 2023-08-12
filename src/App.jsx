import React from "react";
import {
  Navbar,
  Billing,
  Business,
  CTA,
  Clients,
  CardDeal,
  Footer,
  Hero,
  Stats,
  Testimonials,
} from "./components";
const App = () => (
  <div className="w-full bg-primary overflow-hidden">
    <div className="px-6 sm:px-16 flex justify-center items-center">
      <div className="w-full xl:max-w-[1280px]">
        <Navbar />
      </div>
    </div>
    <div className="bg-primary flex justify-center items-start">
      <div className="w-full xl:max-w-[1280px]">
        <Hero />
      </div>
    </div>
    <div className="flex bg-primary justify-center items-start px-6 sm:px-16 ">
      <div className="w-full xl:max-w-[1280px]">
        <Stats />
        <Business /> <Billing /> <CardDeal /> <Testimonials /> <Clients />{" "}
        <CTA /> <Footer />
      </div>
    </div>
  </div>
);
export default App;
