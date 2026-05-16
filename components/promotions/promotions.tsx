"use client";
import { useState } from "react";
import { Download, Maximize2 } from "lucide-react";
import Image from "next/image";
import { promotions } from "@/data/dataPromotions";

export default function Promotions() {
  const [fullscreenId, setFullscreenId] = useState<number | null>(null);

  const handleDownload = (imageSrc: string) => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = `promocion-${Date.now()}.png`;
    link.click();
  };

  const handleFullscreen = (id: number) => {
    setFullscreenId(id);
  };

  return (
    <section className="w-full py-16">
      <div>
        <h3 className="text-5xl font-bold mb-12 ml-20 text-gray-900">
          Promociones
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="relative group rounded-lg overflow-hidden shadow-lg aspect-video "
            >
              <Image
                src={promo.image}
                alt={`Promoción ${promo.id}`}
                fill
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
              />

              {/* Iconos siempre visibles en la esquina inferior derecha */}
              <div className="absolute bottom-4 right-4 flex gap-3 z-10">
                <button
                  onClick={() => handleDownload(promo.image)}
                  className="p-2.5 bg-dark opacity-80 rounded-full transition-all duration-200 backdrop-blur-sm text-white hover:scale-110 cursor-pointer"
                  title="Descargar"
                >
                  <Download className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleFullscreen(promo.id)}
                  className="p-2.5 bg-dark opacity-80 rounded-full transition-all duration-200 backdrop-blur-sm text-white hover:scale-110 cursor-pointer"
                  title="Ver en pantalla completa"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para pantalla completa */}
      {fullscreenId !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setFullscreenId(null)}
        >
          {/* La X ahora está anclada al fondo negro, arriba a la derecha */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setFullscreenId(null);
            }}
            className="absolute top-6 right-6 p-2 text-white text-3xl hover:text-gray-300 transition-colors cursor-pointer z-50"
            title="Cerrar"
          >
            ✕
          </button>

          {/* Contenedor de la imagen */}
          <div className="relative w-full h-full max-w-[90%] max-h-[90vh]">
      <Image
  src={promotions.find((p) => p.id === fullscreenId)?.image || ""}
  alt="Pantalla completa"
  fill
  className="object-cover rounded-xl" 
/>
          </div>
        </div>
      )}
    </section>
  );
}
