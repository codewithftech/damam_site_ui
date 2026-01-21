import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
  EffectCoverflow,
  EffectCube,
  EffectFlip,
  EffectCards,
  Thumbs,
  FreeMode,
  Grid,
  Mousewheel,
  Keyboard,
  Parallax,
  Zoom,
  Controller,
  A11y,
} from "swiper/modules";
import type { SwiperOptions } from "swiper/types";
import { cn } from "@/lib/utils";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";
import "swiper/css/effect-flip";
import "swiper/css/effect-cards";
import "swiper/css/grid";
import "swiper/css/zoom";

export interface SwiperSliderProps {
  children: React.ReactNode[];
  className?: string;
  slideClassName?: string;
  // Swiper configuration options
  modules?: SwiperOptions["modules"];
  spaceBetween?: number;
  slidesPerView?: number | "auto";
  autoplay?: boolean | { delay?: number; disableOnInteraction?: boolean };
  navigation?: boolean;
  pagination?: boolean | { type?: "bullets" | "fraction" | "progressbar" };
  scrollbar?: boolean;
  loop?: boolean;
  effect?: "slide" | "fade" | "cube" | "coverflow" | "flip" | "cards";
  direction?: "horizontal" | "vertical";
  speed?: number;
  breakpoints?: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
  onSlideChange?: (swiper: any) => void;
  // Additional Swiper options
  [key: string]: any;
}

export default function SwiperSlider({
  children,
  className,
  slideClassName,
  modules = [Navigation, Pagination, A11y],
  spaceBetween = 30,
  slidesPerView = 1,
  autoplay = false,
  navigation = true,
  pagination = false,
  scrollbar = false,
  loop = false,
  effect = "slide",
  direction = "horizontal",
  speed = 300,
  breakpoints,
  onSlideChange,
  ...restProps
}: SwiperSliderProps) {
  // Build modules array based on props
  const activeModules = [...(Array.isArray(modules) ? modules : [modules])];

  if (autoplay) {
    activeModules.push(Autoplay);
  }

  if (effect !== "slide") {
    switch (effect) {
      case "fade":
        activeModules.push(EffectFade);
        break;
      case "coverflow":
        activeModules.push(EffectCoverflow);
        break;
      case "cube":
        activeModules.push(EffectCube);
        break;
      case "flip":
        activeModules.push(EffectFlip);
        break;
      case "cards":
        activeModules.push(EffectCards);
        break;
    }
  }

  if (scrollbar) {
    activeModules.push(Scrollbar);
  }

  // Configure autoplay
  const autoplayConfig =
    typeof autoplay === "boolean"
      ? autoplay
        ? { delay: 3000, disableOnInteraction: false }
        : false
      : autoplay;

  // Configure pagination
  const paginationConfig =
    typeof pagination === "boolean"
      ? pagination
        ? { clickable: true }
        : false
      : { ...pagination, clickable: true };

  return (
    <Swiper
      modules={activeModules}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      autoplay={autoplayConfig}
      navigation={navigation}
      pagination={paginationConfig}
      scrollbar={scrollbar}
      loop={loop}
      effect={effect}
      direction={direction}
      speed={speed}
      breakpoints={breakpoints}
      onSlideChange={onSlideChange}
      className={cn("swiper-container", className)}
      {...restProps}
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index} className={cn("swiper-slide", slideClassName)}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

// Export commonly used modules for advanced usage
export {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
  EffectCoverflow,
  EffectCube,
  EffectFlip,
  EffectCards,
  Thumbs,
  FreeMode,
  Grid,
  Mousewheel,
  Keyboard,
  Parallax,
  Zoom,
  Controller,
  A11y,
};
