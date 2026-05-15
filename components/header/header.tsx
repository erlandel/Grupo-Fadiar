"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Menu } from "../menu/menu";

export const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true); // On other pages, header is always "scrolled"
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, pathname]);

  const headerClasses = `
    w-full 
    z-50 
    transition-colors 
    duration-300
    ${isHomePage ? 'fixed bg-white/40 backdrop-blur-sm  shadow-lg shadow-b' : 'sticky top-0'}
    ${isScrolled ? 'bg-white/30 backdrop-blur-md shadow-lg shadow-b' : 'bg-transparent'}
  `;

  return (
    <header className={headerClasses}>
      <nav className="w-full flex items-center justify-between px-10 2xl:px-20 py-4 text-sm">
        <div>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Grupo Fadiar Logo"
              width={125}
              height={20}
            />
          </Link>
        </div>
        <div className="flex gap-10">
          <div>
            <Menu />
          </div>
          <div className="cursor-pointer">
            <Search className="h-7 w-7 text-dark" strokeWidth={2} />
          </div>
        </div>
      </nav>
    </header>
  );
};
