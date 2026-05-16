import { Phone, Mail } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const footerLinks = [
    {
      title: "Promociones",
      links: [
        { name: "Nuestra historia", href: "#" },
        { name: "Dónde estamos", href: "#" },
        { name: "I+D+i", href: "#" },
        { name: "Modelo de negocio", href: "#" },
        { name: "Nuestros clientes", href: "#" },
        { name: "Certificados de Calidad", href: "#" },
      ],
    },
    {
      title: "Grupo Fadiar ",
      links: [
        { name: "Escuelas", href: "#" },
        { name: "Comunidades", href: "#" },
        { name: "Proyectos", href: "#" },
        { name: "Colaboraciones", href: "#" },
      ],
    },
    {
      title: "Nuestros valores",
      links: [
        { name: "Sostenibilidad", href: "#" },
        { name: "Innovación", href: "#" },
        { name: "Acompañamiento", href: "#" },
        { name: "Compromiso", href: "#" },
      ],
    },
    {
      title: "Recursos humanos",
      links: [
        { name: "Nuestros Líderes", href: "#" },
        { name: "Nuestra Estrategia", href: "#" },
        { name: "Formación", href: "#" },
        { name: "Trabaja con Nosotros", href: "#" },
      ],
    },
  ];

  const legalLinks = [
    { name: "Política de privacidad", href: "#" },
    { name: "Uso de cookies", href: "#" },
    { name: "Condiciones de uso", href: "#" },
    { name: "Ventas y reembolsos", href: "#" },
    { name: "Avisos legales", href: "#" },
    { name: "Mapa del sitio", href: "#" },
  ];

  return (
    <footer className="bg-dark text-white py-12 px-4 md:px-8 xl:px-20">
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 border-b-2 border-white pb-8 mb-8">
        {/* Sección de Logo y Contactos */}
        <div className="flex flex-col  lg:col-span-1">
          <div>
            <div className="flex items-center mb-5">
              <Image
                src="/logoWithe.svg"
                alt="Grupo Fadiar Logo"
                width={212}
                height={40}
              />
            </div>
            
            <div className="flex gap-8  mb-8">
              <Link href="#" aria-label="Teléfono">
                <Phone className="w-7 h-7 text-white hover:scale-110  transition-transform" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <FaInstagram className="w-7 h-7 text-white  hover:scale-110  transition-transform" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <FaFacebook className="w-7 h-7 text-white hover:scale-110  transition-transform" />
              </Link>
              <Link href="#" aria-label="Correo electrónico">
                <Mail className="w-7 h-7 text-white hover:scale-110  transition-transform" />
              </Link>
            </div>

          </div>
        </div>

        {/* Secciones de Enlaces */}
        {footerLinks.map((section, index) => (
          <div key={index} className="flex flex-col items-start">
            <h4 className="text-secondary text-xl font-semibold mb-4">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.href}
                    className="text-lg hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Sección Legal y Versión */}
      <div className=" flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
          {legalLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-secondary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
