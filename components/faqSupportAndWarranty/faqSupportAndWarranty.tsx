"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    question: "¿Cómo activo la garantía de mi producto?",
    answer:
      "Debe registrar su producto en nuestro sitio web dentro de los 30 días  posteriores a la compra, completando el formulario de registro de  garantía con los datos de la factura y el número de serie del producto.",
  },
  {
    question: "¿Qué cubre la garantía?",
    answer:
      "La garantía cubre defectos de fabricación, fallos de materiales o  problemas de funcionamiento no atribuibles al uso incorrecto. No cubre  daños por golpes, caídas, instalación inadecuada, uso de accesorios no  originales o desgaste normal por uso.",
  },
  {
    question: "¿Dónde puedo llevar mi producto a reparar?",
    answer:
      "Puede acudir a nuestros centros de servicio autorizados, cuyas  direcciones encontrará en el localizador de tiendas. También puede  contactar a nuestro servicio técnico para coordinar la recogida del  producto.",
  },
  {
    question: "¿Cuánto tiempo tarda una reparación?",
    answer:
      "El plazo estándar de reparación es de 10 a 15 días hábiles, dependiendo  de la disponibilidad de piezas. Para productos en garantía, el tiempo  comienza a contar desde la recepción del producto en nuestro taller.",
  },
  {
    question: "¿Qué hago si perdí mi factura?",
    answer:
      "Puede solicitar un duplicado en el establecimiento donde realizó la  compra. También puede presentar el extracto bancario o comprobante  de pago electrónico si pagó con tarjeta o transferencia",
  },
];

export default function FaqSupportAndWarranty() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className=" px-15">
      <h2 className="text-5xl font-bold mb-6 text-dark">
        Preguntas frecuentes
      </h2>
      <div className="flex flex-col gap-4 mt-15 ">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#F4F4F4] border-l-8 border-l-dark text-dark"
          >
            <div
              className="p-10 "
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="w-full text-4xl flex justify-between items-center text-left font-normal">
                {item.question}
                <ChevronDown
                  className={`h-10 w-10 shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  strokeWidth={3}
                />
              </div>
            </div>
            {openIndex === index && (
              <div className="px-10 pb-10 text-2xl">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
