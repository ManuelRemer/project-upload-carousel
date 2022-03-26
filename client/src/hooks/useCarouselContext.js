import { CarouselContext } from "../context/CarouselContext";
import { useContext } from "react";

export const useCarouselContext = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarouselContext must be used within its provider");
  }

  return context;
};
