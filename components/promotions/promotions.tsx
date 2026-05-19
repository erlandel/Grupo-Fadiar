"use client";
import { useState } from "react";
import { Download, Maximize2 } from "lucide-react";
import { items, layoutConfig } from "./configPromotions";
import { MediaRenderer } from "./mediaRenderer";

export default function Promotions() {
  const [fullscreenSrc, setFullscreenSrc] = useState<string | null>(null);

  const handleDownload = (src: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = `promocion-${Date.now()}.png`;
    link.click();
  };

  const ActionButtons = ({ src }: { src: string }) => (
    <section className="absolute bottom-4 right-4 flex gap-3 z-10">
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
    </section>
  );

  return (
    <section className="w-full py-16 overflow-hidden bg-white">
      <div>
        <h3 className="text-5xl font-black mb-12 ml-6 md:ml-20 text-gray-900">
          Promociones
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 items-start w-full">
          {items.map((item, i) => {
            const { wrapper, self } = layoutConfig[i];
            return (
              <div
                key={i}
                className={`relative group overflow-hidden shadow-lg ${wrapper} ${self}`}
              >
                <MediaRenderer
                  item={item}
                  priority={i < 2}
                />
                <ActionButtons src={item.src} />
              </div>
            );
          })}
        </div>
      </div>

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
            <MediaRenderer
              item={{ type: "image", src: fullscreenSrc }}
              quality={100}
              priority
              sizes="90vw"
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}