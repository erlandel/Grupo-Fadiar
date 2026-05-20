"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/aboutUs", label: "Grupo Fadiar" },
  { href: "/ourBrands", label: "Nuestras marcas" },
  { href: "/Promotions", label: "Promociones", className: "font-bold" },
  { href: "/SupportAndWarranty", label: "Soporte y Garantía" },
  { href: "/Contacts", label: "Contactos" },
];

export const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="font-bold text-lg 2xl:text-xl">
      <ul className="flex items-center  lg:space-x-3">
        {links.map(({ href, label, className }) => (
          <li key={href}>
            <Link
              href={href}
              className={`transition-colors px-4 py-2 rounded-md ${className ?? ""} ${
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
    </div>
  );
};