"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

// Links array
const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/service" },
  { name: "contact", path: "/contact" },
  { name: "projects", path: "/projects" },
  
];

const MobileNav = () => {
  const pathname = usePathname();
  
  return (
    <Sheet>
    <SheetTrigger className="flex justify-center items-center">
      <CiMenuFries className="text-[32px] text-primary" />
    </SheetTrigger>
    <SheetContent className="flex flex-col">
      {/* Logo */}
      <div className="mt-32 mb-40 text-center text-2xl">
        <Link href="/">
            <h1 className="text-4xl font-semibold text-black">
            Direct <span className="text-primary">Builders</span>
            </h1>
        </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
        {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "border-b-2 border-primary text-primary" 
            } capitalize font-medium  hover:text-primary `}
          >
            {link.name}
          </Link>
        );
      })}
        </nav>

    </SheetContent>
  </Sheet>
  );
};

export default MobileNav;
