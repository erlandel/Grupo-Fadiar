"use client";

import Image from "next/image";
import { Search, Menu as MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Menu } from "../menu/menu";
import MenuMovile from "../menu/menuMovile";

export const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  {/* Menú móvil */}
  <MenuMovile isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

  <nav className="w-full flex items-center justify-between py-4  text-sm">
    {/* ✅ Wrapper que controla el padding de forma explícita */}
    <div className="flex items-center justify-between w-full px-10 2xl:px-20">
      
      <div className="hidden xl:block">
        <Link href="/">
          <Image src="/logo.svg" alt="Grupo Fadiar Logo" width={125} height={20} />
        </Link>
      </div>

      {/* Mobile */}
      <div className="xl:hidden flex items-center justify-between w-full">
        <div className="cursor-pointer" onClick={() => setIsMenuOpen(true)}>
          <MenuIcon className="h-7 w-7 text-dark" strokeWidth={2} />
        </div>
        <div className="cursor-pointer">
          <Search className="h-7 w-7 text-dark" strokeWidth={2} />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden xl:flex gap-10 items-center">
        <Menu />
        <div className="cursor-pointer">
          <Search className="h-7 w-7 text-dark" strokeWidth={2} />
        </div>
      </div>
    </div>
  </nav>
</header>
  );
};
