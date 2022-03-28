import { useRef } from "react";

export const useCreateStrip = (itemsShown, items) => {
  const prevItems = (itemsShown, items) => {
    let result = [];
    for (let i = 1; i <= itemsShown; i++) {
      result = [items[items.length - i], ...result];
    }
    return result;
  };
  const nextItems = (itemsShown, items) => {
    let result = [];
    for (let i = itemsShown; i > 0; i--) {
      result = [...result, items[i - 1]];
    }
    return result.reverse();
  };

  const itemsStrip = useRef([
    ...prevItems(itemsShown, items),
    ...items,
    ...nextItems(itemsShown, items),
  ]);

  return itemsStrip.current;
};
