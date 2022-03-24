import { useEffect, useState, useRef, cloneElement } from "react";

// styles
import "./Carousel.css";

const Carousel = ({ children, itemsShown = 1 }) => {
  const [activeIndex, setActiveIndex] = useState(itemsShown);
  const [transform, setTransform] = useState(true);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const prevItems = (itemsShown, children) => {
    let result = [];
    for (let i = 1; i <= itemsShown; i++) {
      result = [children[children.length - i], ...result];
    }
    return result;
  };
  const nextItems = (itemsShown, children) => {
    let result = [];
    for (let i = itemsShown; i > 0; i--) {
      result = [...result, children[i - 1]];
    }
    return result.reverse();
  };

  const itemsStrip = useRef([
    ...prevItems(itemsShown, children),
    ...children,
    ...nextItems(itemsShown, children),
  ]);

  // updater
  const updateIndex = (newIndex) => {
    setTransform(true);
    setActiveIndex(newIndex);
    setButtonsDisabled(true);
  };

  // handler
  const handleTransitionEnd = () => {
    setButtonsDisabled(false);
    if (
      activeIndex === itemsStrip.current.length - itemsShown ||
      activeIndex === 0
    ) {
      setTransform(false);
    }
  };

  // effects
  useEffect(() => {
    if (!transform && activeIndex === itemsStrip.current.length - itemsShown) {
      setActiveIndex(itemsShown);
      setButtonsDisabled(false);
      return;
    }
    if (!transform && activeIndex === 0) {
      setActiveIndex(itemsStrip.current.length - itemsShown * 2);
    }
  }, [transform, activeIndex, itemsShown, itemsStrip]);

  //return
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
        {itemsStrip.current.map((child) => {
          return cloneElement(child, { itemsShown, key: Math.random() });
        })}
      </div>

      <div className="carousel__navigation">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          disabled={!buttonsDisabled ? false : true}
        >
          prev
        </button>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          disabled={!buttonsDisabled ? false : true}
        >
          next
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
        backgroundColor: `${children}`,
      }}
    >
      {children}
    </div>
  );
};
