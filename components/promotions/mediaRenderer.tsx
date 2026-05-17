import Image from "next/image";
import { MediaItem } from "./configPromotions";

type Props = {
  item: MediaItem;
  className?: string;
  quality?: number;
  priority?: boolean;
  sizes?: string;
};

export const MediaRenderer = ({ item, className, quality = 75, priority = false, sizes = "(max-width: 768px) 100vw, 50vw" }: Props) => {
  if (item.type === "video") {
    return (
      <video
        src={item.src}
        autoPlay
        muted
        loop
        playsInline
        className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ${className ?? ""}`}
      />
    );
  }
  return (
    <Image
      src={item.src}
      alt="Promoción"
      fill
      quality={quality}
      priority={priority}
      sizes={sizes}
      className={`object-cover group-hover:scale-110 transition-transform duration-300 ${className ?? ""}`}
    />
  );
};