"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavLink from "./NavLink";


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
    <div >
      {!isOpen && (
        <button
          onClick={toggleMenu}
          className="relative w-8 h-8 flex flex-col justify-between items-center group focus:outline-none"
        >
          <span className="h-1 w-full bg-secondary_light rounded transform transition duration-300 ease-in-out group-hover:bg-primary"></span>
          <span className="h-1 w-full bg-secondary_light rounded transform transition duration-300 ease-in-out group-hover:bg-primary"></span>
          <span className="h-1 w-full bg-secondary_light rounded transform transition duration-300 ease-in-out group-hover:bg-primary"></span>
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-light py-4 w-full h-full overflow-hidden flex flex-col items-center">
          <button
            onClick={toggleMenu}
            className="absolute top-8 right-8 w-8 h-8 flex items-center justify-center"
          >
            <span className="block w-8 h-0.5 bg-secondary transform rotate-45 absolute"></span>
            <span className="block w-8 h-0.5 bg-secondary transform -rotate-45 absolute"></span>
          </button>

          <div onClick={toggleMenu} className="mt-8 flex flex-col space-y-8">
            {data.map((item, index) => (
              // <Link
              //   key={index}
              //   href={item.route}
              //   className="flex flex-col text-secondary justify-center font-bold text-xl p-4"
              // >
              //   {item.label}
              // </Link>
              <NavLink key={index} label={item.label} route={item.route} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavigationMobil;
