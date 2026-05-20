"use client";

import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/aboutUs", label: "Grupo Fadiar" },
  { href: "/ourBrands", label: "Nuestras marcas" },
  { href: "/Promotions", label: "Promociones"},
  { href: "/SupportAndWarranty", label: "Soporte y Garantía" },
  { href: "/Contacts", label: "Contactos" },
];

interface MenuMovileProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuMovile({ isOpen, onClose }: MenuMovileProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay con fondo semitransparente para capturar clicks fuera */}
      <div
        className="fixed inset-0 z-40 bg-black/20"
        onClick={onClose}
      />

      {/* Panel del menú */}
      <div className="fixed top-0 left-0 w-80 h-auto bg-white/30 backdrop-blur-2xl z-150 p-4 shadow-2xl rounded-xl m-2">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={onClose} >
            <Image src="/logo.svg" alt="Grupo Fadiar Logo" width={130} height={20} />
          </Link>
          <button onClick={onClose}>
            <X className="h-7 w-7 text-dark" strokeWidth={2} />
          </button>
        </div>

        <div className="h-px bg-black mt-4" />

        <div className="mt-4">
          <nav>
            <ul className="flex flex-col space-y-2 font-black">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={onClose}
                    className={`block text-xl transition-colors px-4 py-2 rounded-md ${
                      pathname === href
                        ? "bg-dark text-secondary"
                        : "text-slate-800 hover:text-secondary"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}