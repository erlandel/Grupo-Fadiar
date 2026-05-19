import { MediaItem } from "./configPromotions";

type Props = {
  item: MediaItem;
  className?: string;
  quality?: number;
  priority?: boolean;
  sizes?: string;
};

export const MediaRenderer = ({ item, className, priority = false }: Props) => {
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
    <img
      src={item.src}
      alt="Promoción"
      loading={priority ? "eager" : "lazy"}
      className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ${className ?? ""}`}
    />
  );
};