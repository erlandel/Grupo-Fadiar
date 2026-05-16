// promotionsConfig.ts

export type MediaType = "image" | "video";

export type MediaItem = {
  type: MediaType;
  src: string;
};

export type LayoutConfig = {
  wrapper: string;
  self: string;
};

export const items: MediaItem[] = [
  { type: "image", src: "/images/imagesPromotions/1.png" },
  { type: "image", src: "/images/imagesPromotions/2.png" },
  { type: "image", src: "/images/imagesPromotions/3.png" },
  { type: "image", src: "/images/imagesPromotions/4.png" },
];

export const layoutConfig: LayoutConfig[] = [
  { wrapper: "rounded-r-2xl aspect-16/6.5 w-full", self: "" },
  { wrapper: "rounded-2xl aspect-16/8 w-full md:w-[90%] md:mr-auto", self: "" },
  { wrapper: "rounded-2xl aspect-video w-full md:w-[90%] md:ml-auto", self: "" },
  { wrapper: "rounded-l-2xl aspect-16/7.5 w-full", self: "self-end" },
];