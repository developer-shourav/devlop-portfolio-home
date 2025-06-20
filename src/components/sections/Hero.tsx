import React from "react";
import { Navbar } from "../shared/Navbar";
import TitleWithHighlight from "../ui/heading/TitleWithHighlight";

const Hero = () => {
  return (
    <section className="w-full hero-section">
      <Navbar />
      {/* -------------------Hero content--------------------- */}
      <div className="content-size mt-10 mb-5">
        <TitleWithHighlight>
          Trusted <span className="titleHighlight">Partner</span> for
          <br /> Your Website{" "}
          <span className="titleHighlight">Develop.</span>
        </TitleWithHighlight>
      </div>
    </section>
  );
};

export default Hero;
