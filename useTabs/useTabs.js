import React, { useState } from "react";

// 가변적인 content
const content = [
  {
    tab: "Section 1",
    content: "This is Section 1"
  },
  {
    tab: "Section 2",
    content: "This is Section 2"
  }
];

// hooks
export const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};
