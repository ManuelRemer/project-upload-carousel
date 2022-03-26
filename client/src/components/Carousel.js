import { useEffect, useState, useRef, cloneElement, useContext } from "react";
import { useCreateStrip } from "../hooks/useCreateStrip";
// styles
import "./Carousel.css";

//context

import { useCarousel } from "../hooks/useCarousel";
import { useCarouselContext } from "../hooks/useCarouselContext";

const Carousel = ({ children, itemsShown = 1, dumb = false }) => {
  const carouselStrip = useCreateStrip(1, children);
  const { navColor } = useCarouselContext();

  const {
    transform,
    buttonsDisabled,
    handleTransitionEnd,
    activeIndex,
    updateIndex,
  } = useCarousel(1, carouselStrip);
  // const {activeIndex, updateIndex } = useCarouselContext();

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
        {carouselStrip.current.map((child) => {
          return cloneElement(child, {
            itemsShown,
            key: Math.random(),
          });
        })}
      </div>

      {!dumb && (
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
      )}
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
