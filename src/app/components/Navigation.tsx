import menuData from "@/data/menu.json";
// import ButtonToTop from "./ButtonToTop";
// import NavigationMobil from "./NavigationMobil";

import Link from "next/link";
import Image from "next/image";

function Navigation() {
  return (
    <div className="max-w-[1024px] mx-auto ring-2 ring-red-500">
      <div className="flex justify-center md:justify-start items-center ring-2 ring-blue-500 py-4">

        {/* Navigation Menu mobile as client component */}
        {/* toggle by tailwind */}
        <div className="flex md:hidden">mobile
          {/* <NavigationMobil
              data={menuData.MenuItems.map((item) => ({
                label: t(item.label),
                route: item.route,
              }))}
            /> */}
        </div>

        <Link href="/" className="px-4">
          <Image
            src="/logo.jpg"
            width={105}
            height={54}
            alt="Logo of  the company"
            priority
          />
        </Link>

        {/* Navigation Menu tablet/desktop*/}
        {/* toggle by tailwind */}
        <div className="hidden md:flex">
          {menuData.MenuItems.map((item, index) => (
            <Link
              key={index}
              href={item.route}
              className="text-secondary_light hover:text-secondary font-bold text-xl px-2 lg:px-4"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* gototop button */}
      {/* <ButtonToTop /> */}
    </div>
  );
}

export default Navigation;
