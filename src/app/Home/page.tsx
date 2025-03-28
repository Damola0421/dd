"use case";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Gallery from "../Gallery/page";
import Features from "../Features/page";
import Hero from "../component/Hero";
import Stats from "../Stats/page";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Features/>
      <Stats/>
      <Gallery />
      <Footer />
    </div>
  );
}
