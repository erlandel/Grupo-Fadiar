"use client";
import { useState } from "react";
import { Download, Maximize2 } from "lucide-react";
import Image from "next/image";

export default function Promotions() {
  const [fullscreenSrc, setFullscreenSrc] = useState<string | null>(null);

  const handleDownload = (imageSrc: string) => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = `promocion-${Date.now()}.png`;
    link.click();
  };

  const ActionButtons = ({ src }: { src: string }) => (
    <div className="absolute bottom-4 right-4 flex gap-3 z-10">
      <button
        onClick={() => handleDownload(src)}
        className="p-2.5 bg-black/70 hover:bg-black/90 rounded-full transition-all duration-200 text-white hover:scale-110 cursor-pointer backdrop-blur-sm"
        title="Descargar"
      >
        <Download className="w-5 h-5" />
      </button>
      <button
        onClick={() => setFullscreenSrc(src)}
        className="p-2.5 bg-black/70 hover:bg-black/90 rounded-full transition-all duration-200 text-white hover:scale-110 cursor-pointer backdrop-blur-sm"
        title="Ver en pantalla completa"
      >
        <Maximize2 className="w-5 h-5" />
      </button>
    </div>
  );

  return (
    <section className="w-full py-16 overflow-hidden bg-white">
      <div>
        <h3 className="text-5xl font-bold mb-12 ml-6 md:ml-20 text-gray-900">
          Promociones
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-x-10 items-start w-full">

          {/* Imagen 1: pega al borde IZQUIERDO, más corta, sin borde izquierdo redondeado */}
          <div className="relative group rounded-r-2xl overflow-hidden shadow-lg aspect-16/6.5">
            <Image
              src="/images/imagesPromotions/1.png"
              alt="Promoción 1"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <ActionButtons src="/images/imagesPromotions/1.png" />
          </div>

          {/* Imagen 2: margen a la derecha (no toca el borde), más alta, todos los bordes redondeados */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg aspect-16/8 w-full md:w-[90%] md:mr-auto">
            <Image
              src="/images/imagesPromotions/2.png"
              alt="Promoción 2"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              priority
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <ActionButtons src="/images/imagesPromotions/2.png" />
          </div>

          {/* Imagen 3: margen a la izquierda (no toca el borde), más alta, todos los bordes redondeados */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg aspect-video w-full md:w-[90%] md:ml-auto">
            <Image
              src="/images/imagesPromotions/3.png"
              alt="Promoción 3"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <ActionButtons src="/images/imagesPromotions/3.png" />
          </div>

          {/* Imagen 4: pega al borde DERECHO, más corta, sin borde derecho redondeado, baja al fondo de la fila */}
          <div className="relative group rounded-l-2xl overflow-hidden shadow-lg aspect-16/7.5 self-end">
            <Image
              src="/images/imagesPromotions/4.png"
              alt="Promoción 4"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <ActionButtons src="/images/imagesPromotions/4.png" />
          </div>

        </div>
      </div>

      {/* Modal pantalla completa */}
      {fullscreenSrc !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setFullscreenSrc(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setFullscreenSrc(null);
            }}
            className="absolute top-6 right-6 p-2 text-white text-3xl hover:text-gray-300 transition-colors cursor-pointer z-50"
          >
            ✕
          </button>
          <div className="relative w-full h-full max-w-[90%] max-h-[90vh]">
            <Image
              src={fullscreenSrc}
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