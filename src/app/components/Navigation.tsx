import menuData from "@/data/menu.json";
import ButtonToTop from "./ButtonToTop";
import NavigationMobil from "./NavigationMobil";
import NavLink from "./NavLink";

import Link from "next/link";
import Image from "next/image";

function Navigation() {
  return (
    <div className="w-full sticky top-0 z-10 bg-light shadow-md">
      <div className="max-w-[1024px] mx-auto py-4 flex justify-between md:justify-start items-center">
        

        <Link href="/" className="px-4 ">
          <Image
            src="/logo.jpg"
            width={349}
            height={178}
            alt="Logo of  the company"
            priority
            className="flex flex-ceter w-20 h-auto"
          />
        </Link>

        {/* Navigation Menu tablet/desktop*/}
        {/* toggle by tailwind */}
        <div className="hidden md:flex md:flex-start">
          {menuData.MenuItems.map((item, index) => (
            <NavLink key={index} label={item.label} route={item.route} />
          ))}
        </div>

        {/* Navigation Menu mobile as client component */}
        {/* toggle by tailwind */}
        <div className="flex pr-8 md:hidden">
          <NavigationMobil
            data={menuData.MenuItems.map((item) => ({
              label: item.label,
              route: item.route,
            }))}
          />
        </div>

      </div>

      {/* gototop button */}
      <ButtonToTop />
    </div>
  );
}

export default Navigation;
