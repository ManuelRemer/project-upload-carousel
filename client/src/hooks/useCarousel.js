import { useState, useEffect, useRef } from "react";
import { useCreateStrip } from "./useCreateStrip";
import { useCarouselContext } from "./useCarouselContext";
export const useCarousel = (itemsShown, itemsStrip) => {
  const [activeIndex, setActiveIndex] = useState(itemsShown);
  const [transform, setTransform] = useState(true);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const { changeNavColor } = useCarouselContext();
  // updater
  const updateIndex = (newIndex) => {
    setTransform(true);
    setActiveIndex(newIndex);
    changeNavColor(newIndex);
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

  return {
    transform,
    activeIndex,
    buttonsDisabled,
    handleTransitionEnd,
    updateIndex,
    useCreateStrip,
  };
};
