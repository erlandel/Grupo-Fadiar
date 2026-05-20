import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { supportItems } from "@/data/dataSupportItems";
import FaqSupportAndWarranty from "@/components/faqSupportAndWarranty/faqSupportAndWarranty";

export default function SupportAndWarranty() {
  const customOrder = [1, 3, 2, 4];
  const orderedSupportItems = customOrder
    .map((id) => supportItems.find((item) => item.id === id))
    .filter(Boolean as unknown as <T>(x: T | undefined) => x is T);

  return (
    <>
      <div className="mx-15 mt-10">
        <div className="flex text-xl">
          <p>
            <Link href="/">Inicio</Link>
          </p>
          <ChevronRight className="h-6 w-6" />
          <p>Soporte y Garantía</p>
        </div>

        <section className="mt-10">
          <h1 className="text-5xl font-bold text-dark">Soporte y Garantía</h1>

          <div className="flex justify-between items-end mt-2">
            <div className="w-1/2 text-xl  ">
              <p>
                En Grupo Fadiar, comprendemos la importancia de cada inversión y
                nos presentamos como la opción estratégica por estas razones
                fundamentales
              </p>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <div className="flex divide-x-3 divide-dark">
                {orderedSupportItems.map((item) => (
                  <div key={item.id} className="px-4 text-center">
                    <div className="flex justify-center">
                      <item.icon className="h-15 w-15 text-dark" />
                    </div>
                    <p className="mt-2 text-xl  text-dark font-black tracking-wider">
                      {item.title.toUpperCase()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>


      <div className="my-20">
        <FaqSupportAndWarranty />
      </div>
    </>
  );
}
