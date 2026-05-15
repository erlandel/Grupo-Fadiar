import { dataTextos } from "@/data/dataTextos";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function DiscoverOurGroup() {
  return (
    <>
      <div className="flex justify-center mx-20">
        <div className="flex justify-center  w-3/5">
          <div>
            <div>
              <h2 className="text-[50px] font-bold font-montserrat text-dark">
                DESCUBRE NUESTRO GRUPO Y SU GENTE
              </h2>
              <p className="text-xl mt-10">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipi
              </p>
            </div>
            {/* Lista con iconos */}
            <div className="flex flex-col gap-4 mt-10">
              {dataTextos.map((texto, index) => (
                <div key={index} className="flex items-center gap-4 ">
                  {/* Círculo dark con ícono secondary */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dark shrink-0">
                    <FaCheck className="text-secondary w-5 h-5" />
                  </div>
                  <p className="text-xl">{texto}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button className="bg-dark text-secondary text-3xl px-4 py-2 rounded-lg font-bold cursor-pointer hover:scale-105 transition-transform">
                Ver más
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end w-2/5">
          <Image
            src="/images/girl.png"
            alt="Girl"
            width={640}
            height={800}
            priority
            className="w-120 h-auto object-contain"
          />
        </div>
      </div>
    </>
  );
}
