import { useState, useEffect } from "react";
// custom stuff
import { useColorThemeContext } from "./useColorThemeContext";

export const useCarousel = (itemsShown, itemsStrip) => {
  // states
  const [activeIndex, setActiveIndex] = useState(itemsShown);
  const [transform, setTransform] = useState(true);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  // custom hooks
  const { changeNavColor } = useColorThemeContext();

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
    if (activeIndex === itemsStrip.length - itemsShown || activeIndex === 0) {
      setTransform(false);
    }
  };

  // effects
  useEffect(() => {
    if (!transform && activeIndex === itemsStrip.length - itemsShown) {
      setActiveIndex(itemsShown);
      setButtonsDisabled(false);
      return;
    }
    if (!transform && activeIndex === 0) {
      setActiveIndex(itemsStrip.length - itemsShown * 2);
    }
  }, [transform, activeIndex, itemsShown, itemsStrip]);

  return {
    transform,
    activeIndex,
    buttonsDisabled,
    handleTransitionEnd,
    updateIndex,
  };
};
