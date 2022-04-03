import { useEffect, useReducer } from "react";

const carouselReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_INDEX":
      return {
        ...state,
        activeIndex: action.payload,
        buttonsDisabled: true,
        transform: true,
      };
    case "TRANSITION-END_REG":
      return { ...state, buttonsDisabled: false };
    case "TRANSITION-END_INFINITE":
      return { ...state, buttonsDisabled: false, transform: false };
    case "JUMP_TO_START":
      return { ...state, activeIndex: action.payload, buttonsDisabled: false };
    case "JUMP_TO_END":
      return { ...state, activeIndex: action.payload };

    default:
      return state;
  }
};

export const useCarousel = (itemsShown, itemsStrip) => {
  const [state, dispatch] = useReducer(carouselReducer, {
    activeIndex: itemsShown,
    transform: true,
    buttonsDisabled: false,
  });

  const { transform, activeIndex, buttonsDisabled } = state;

  const handleTransitionEnd = () => {
    if (activeIndex === itemsStrip.length - itemsShown || activeIndex === 0) {
      dispatch({ type: "TRANSITION-END_INFINITE" });
    } else {
      dispatch({ type: "TRANSITION-END_REG" });
    }
  };

  // effects
  useEffect(() => {
    if (!transform && activeIndex === itemsStrip.length - itemsShown) {
      dispatch({ type: "JUMP_TO_START", payload: itemsShown });

      return;
    }
    if (!transform && activeIndex === 0) {
      dispatch({
        type: "JUMP_TO_END",
        payload: itemsStrip.length - itemsShown * 2,
      });
    }
  }, [transform, activeIndex, itemsShown, itemsStrip]);

  return {
    transform,
    activeIndex,
    buttonsDisabled,
    handleTransitionEnd,
    dispatch,
  };
};
