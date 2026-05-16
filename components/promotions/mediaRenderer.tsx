// MediaRenderer.tsx
import Image from "next/image";
import { MediaItem } from "./configPromotions";

type Props = {
  item: MediaItem;
  className?: string;
};

export const MediaRenderer = ({ item, className }: Props) => {
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
      sizes="90vw"
      priority
      className={`object-cover group-hover:scale-110 transition-transform duration-300 ${className ?? ""}`}
    />
  );
};
