"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { imageData } from "@/data/dataImegenes";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imageData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === imageData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="relative flex-1">
        {imageData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <div
              style={{
                backgroundImage: `linear-gradient(to top, #010A2D, #7594D000 50%), url(${slide.url})`,
              }}
              className="absolute inset-0 bg-center bg-cover"
            />
          </div>
        ))}

        {/* Contenido sobre la imagen */}
        <div className="relative felx   h-full flex items-end  text-white  mx-20 pb-8 gap-5">
          {/* Redes sociales */}
          <div className="flex flex-col gap-y-4 justify-end  pb-2">
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-full hover:scale-110 transition-colors"
            >
              <FaInstagram className="w-10 h-10" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 rounded-full hover:scale-110 transition-colors"
            >
              <FaFacebook className="w-9 h-9" />
            </a>
          </div>
          {/* Barra inferior: redes sociales + navegación */}
          <div className="flex flex-col  w-full">
            <div
              className={`flex gap-4 ${imageData[currentIndex].showButtons !== false ? "mb-10" : "mb-5"}`}
            >
              {/* Título y descripción */}
              <div className="flex-1 flex flex-col justify-end">
                <div className="h-22 flex items-center">
                  {imageData[currentIndex].title.startsWith("/images/") ? (
                    <Image
                      src={imageData[currentIndex].title}
                      alt={imageData[currentIndex].description}
                      width={300}
                      height={100}
                      className="object-contain h-full w-auto"
                    />
                  ) : (
                    <h2
                      className={`text-4xl md:text-[70px] font-montserrat ${
                        imageData[currentIndex].titleFont || ""
                      }`}
                    >
                      {imageData[currentIndex].title}
                    </h2>
                  )}
                </div>
                <div className="flex items-end gap-8">
                  {imageData[currentIndex].showButtons !== false && (
                    <div className="space-x-4 shrink-0 mt-8">
                      <button className="border-3 px-6 py-3 rounded-4xl text-3xl cursor-pointer hover:scale-105">
                        Promociones
                      </button>
                      <button className="bg-white text-dark font-bold px-8 py-4 rounded-full text-3xl transition-transform hover:scale-105 cursor-pointer">
                        Compra
                      </button>
                    </div>
                  )}
                  <p
                    className={`${imageData[currentIndex].showButtons !== false ? "text-5xl pb-3" : "text-[22px] max-w-200 mt-2"} ${!imageData[currentIndex].descriptionFont?.startsWith("font-") ? "" : imageData[currentIndex].descriptionFont}`}
                    style={{
                      fontFamily: !imageData[
                        currentIndex
                      ].descriptionFont?.startsWith("font-")
                        ? `"${imageData[currentIndex].descriptionFont}"`
                        : undefined,
                    }}
                  >
                    {imageData[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Línea divisoria + botones de navegación */}
            <div className="flex items-center w-full">
              <div className="grow h-1 bg-white mr-10 "></div>
              <div className="flex gap-x-8">
                <button
                  onClick={prevSlide}
                  className="group p-2 rounded-full border border-white hover:bg-white transition-all duration-300 cursor-pointer"
                >
                  <ChevronLeft
                    className="w-6 h-6 text-white group-hover:text-blue-900 transition-colors"
                    strokeWidth={3}
                  />
                </button>

                <button
                  onClick={nextSlide}
                  className="group p-2 rounded-full border border-white hover:bg-white transition-all duration-300 cursor-pointer"
                >
                  <ChevronRight
                    className="w-6 h-6 text-white group-hover:text-blue-900 transition-colors"
                    strokeWidth={3}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
