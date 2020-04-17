const getNextTabId = (
  tabs: TabObject[],
  currentTabId: string,
  toLeft?: boolean
): string => {
  const currentIndex = tabs.findIndex((tab) => tab.id === currentTabId);
  if (toLeft) {
    const id =
      currentIndex != 0 ? tabs[currentIndex - 1].id : tabs[tabs.length - 1].id;
    return id;
  } else {
    const id =
      currentIndex != tabs.length - 1 ? tabs[currentIndex + 1].id : tabs[0].id;
    return id;
  }
};

export default getNextTabId;
