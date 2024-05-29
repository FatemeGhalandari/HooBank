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
    <div className="bg-primary flex justify-center items-start" id="Home">
      <div className="w-full xl:max-w-[1280px]">
        <Hero />
      </div>
    </div>
    <div className="flex bg-primary justify-center items-start px-6 sm:px-16 ">
      <div className="w-full xl:max-w-[1280px]">
        <section id="Stats">
          <Stats />
        </section>
        <section id="Business">
          <Business />
        </section>
        <section id="Billing">
          <Billing />
        </section>
        <section id="CardDeal">
          <CardDeal />
        </section>
        <section id="Testimonials">
          <Testimonials />
        </section>
        <section id="Clients">
          <Clients />
        </section>
        <section id="CTA">
          <CTA />
        </section>{" "}
        <Footer />
      </div>
    </div>
  </div>
);
export default App;
