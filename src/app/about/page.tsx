import React from "react";
import HeroImage from "../components/HeroImage";

function About() {
  return (
    <>
      <HeroImage image={"/images/hero/hero_01.webp"} />

      {/* Text about */}
      <div className="max-w-[1024px] mx-auto p-4 space-y-4 mb-8">
        <h1 className="text-primary text-xl md:text-4xl font-bold ">
          xxxx

        </h1>

        {/* start CSS for all text boxes */}
        <div className="text-secondary text-lg md:text-xl space-y-4">

        <p className="font-bold">xxx</p>
        <p>xxx</p>
        <p>xxx</p>

        
        </div>
        {/* end CSS for all text boxes */}
      </div>
    </>
  );
}

export default About;
