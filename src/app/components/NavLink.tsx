"use client";

import React from "react";
// useParams gives you access to dynamic route parameters from the URL. like /en
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLinkProps {
  label: string;
  route: string;
}

function NavLink(data: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={data.route}
      className={`hover:text-secondary font-bold text-xl px-2 lg:px-4 duration-300 ${
        pathname === data.route ? "text-primary" : "text-secondary_light"
      }`}
    >
      {data.label}
    </Link>
  );
}

export default NavLink;
