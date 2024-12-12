"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./Mobnav";



const links = [
  { name: "about us ", href: "/" },
  { name: "service", href: "/service" },
  { name: "contact", href: "/contact" },
  { name: "projects", href: "/projects" },
];


export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <header className="sticky   border-b  top-0 left-0 right-0 bg-white z-50 shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl ">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
          <p className="text-black">Direct</p>
          <p className="text-primary">builders</p>
          </h1>
          
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <MobileNav/>
        


      </div>
   
    </header>
  );
}