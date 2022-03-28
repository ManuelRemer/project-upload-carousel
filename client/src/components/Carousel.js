import { cloneElement } from "react";
import { useCreateStrip } from "../hooks/useCreateStrip";
// styles
import "./Carousel.css";
// custom stuff
import { useCarousel } from "../hooks/useCarousel";
import { useColorThemeContext } from "../hooks/useColorThemeContext";

const Carousel = ({ children, itemsShown = 1 }) => {
  const carouselStrip = useCreateStrip(itemsShown, children);
  const { navColor } = useColorThemeContext();

  const {
    transform,
    buttonsDisabled,
    handleTransitionEnd,
    activeIndex,
    updateIndex,
  } = useCarousel(itemsShown, carouselStrip);

  return (
    <div className="carousel">
      <div
        className="carousel_inner"
        onTransitionEnd={handleTransitionEnd}
        style={
          transform
            ? {
                transform: `translateX(-${(activeIndex * 100) / itemsShown}%`,
                transition: "transform 0.3s",
              }
            : {
                transform: `translateX(-${(activeIndex * 100) / itemsShown}%`,
                transition: "none",
              }
        }
      >
        {carouselStrip.map((child) => {
          return cloneElement(child, {
            itemsShown,
            key: Math.random(),
          });
        })}
      </div>

      <div className="carousel__navigation">
        <button
          style={{ color: `${navColor}` }}
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          disabled={!buttonsDisabled ? false : true}
        >
          {"<<"}
        </button>
        <button
          style={{ color: `${navColor}` }}
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          disabled={!buttonsDisabled ? false : true}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default Carousel;

export const CarouselItem = ({ children, itemsShown }) => {
  return (
    <div
      className="carousel__item"
      style={{
        width: `${100 / parseInt(itemsShown)}%`,
      }}
    >
      {children}
    </div>
  );
};
