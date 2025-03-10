"use client";

import React, { useState } from "react";
import NavLink from "./NavLink";
import ButtonToTop from "./ButtonToTop";

interface NavMobilProps {
  data: {
    label: string;
    route: string;
  }[];
}

function NavigationMobil({ data }: NavMobilProps) {
  //   console.log("data", data);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {!isOpen && (
        <>
          <button
            onClick={toggleMenu}
            className="relative w-8 h-8 flex flex-col justify-between items-center group focus:outline-none"
          >
            <span className="h-1 w-full bg-secondary_light rounded transform transition duration-300 ease-in-out group-hover:bg-primary"></span>
            <span className="h-1 w-full bg-secondary_light rounded transform transition duration-300 ease-in-out group-hover:bg-primary"></span>
            <span className="h-1 w-full bg-secondary_light rounded transform transition duration-300 ease-in-out group-hover:bg-primary"></span>
          </button>
          <ButtonToTop />
        </>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-light py-4 w-full h-full overflow-y-scroll flex flex-col items-center dark:bg-secondary">
          <button
            onClick={toggleMenu}
            className="absolute top-8 right-8 w-8 h-8 flex items-center justify-center"
          >
            <span className="block w-8 h-0.5 bg-secondary dark:bg-secondary_light transform rotate-45 absolute"></span>
            <span className="block w-8 h-0.5 bg-secondary dark:bg-secondary_light transform -rotate-45 absolute"></span>
          </button>

          <div onClick={toggleMenu} className="mt-8 flex flex-col space-y-8">
            {data.map((item, index) => (
              <NavLink key={index} label={item.label} route={item.route} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavigationMobil;
