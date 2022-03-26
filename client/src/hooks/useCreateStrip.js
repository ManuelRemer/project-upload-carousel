import { useRef } from "react";

export const useCreateStrip = (itemsShown, children) => {
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

  return itemsStrip;
};
