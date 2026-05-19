import Image from "next/image";

interface CardProductProps {
  productImage: string;
  productAlt: string;
  brandImage: string;
  brandAlt: string;
  brandWidth?: number;
  brandHeight?: number;
  description: string;
}

export default function CardProduct({
  productImage,
  productAlt,
  brandImage,
  brandAlt,
  brandWidth = 96,
  brandHeight = 40,
  description,
}: CardProductProps) {
  return (
    <div className="group relative flex flex-col w-73 h-90.5 bg-white/5 rounded-xl p-4 overflow-hidden transform transition-transform duration-300 hover:scale-115">
      {/* Diseño Original */}
      <div className="shrink-0 group-hover:opacity-0 transition-opacity duration-300">
        <Image
          src={productImage}
          alt={productAlt}
          width={270}
          height={180}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center items-center grow group-hover:opacity-0 transition-opacity duration-300">
        <Image
          src={brandImage}
          alt={brandAlt}
          width={brandWidth}
          height={brandHeight}
          className="object-contain"
        />
      </div>

      {/* Capa de Hover (Solo aparece al pasar el mouse) */}
      <div className="absolute inset-0 bg-white/1 flex flex-col items-center justify-start p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
        <div className="flex   mb-4">
          <Image
            src={brandImage}
            alt={brandAlt}
            width={brandWidth}
            height={brandHeight}
            className="object-contain"
          />
        </div>
        <p className="text-white text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
}