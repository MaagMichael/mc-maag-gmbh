import menuData from "@/data/menu.json";
import ButtonToTop from "./ButtonToTop";
import NavigationMobil from "./NavigationMobil";
import NavLink from "./NavLink";

import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";

function Navigation() {
  return (
    <div className="w-full sticky top-0 z-10 bg-light dark:bg-secondary shadow-md">
      <div className="max-w-[1024px] mx-auto p-2 flex justify-between  items-center">
        <Link href="/" className="p-2 rounded bg-light dark:bg-light">
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
          <ButtonToTop />
        </div>

        <div className="flex gap-8">
          
            <ThemeSwitch />
          

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

      </div>
    </div>
  );
}

export default Navigation;
