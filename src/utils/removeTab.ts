const removeTab = (
  id: string,
  prevState: TabState,
  stateHandler: Function,
  wasActive: boolean
): void => {
  const currentTabIndex = prevState.tabs.findIndex(tab => tab.id === id);

  let nextTabId: string;

  if (prevState.tabs[currentTabIndex + 1]) {
    nextTabId = prevState.tabs[currentTabIndex + 1].id;
  } else if (prevState.tabs[currentTabIndex - 1]) {
    nextTabId = prevState.tabs[currentTabIndex - 1].id;
  }

  stateHandler({
    ...(wasActive ? { activeTabId: nextTabId } : { ...prevState }),
    tabs: prevState.tabs.filter(tab => tab.id !== id)
  });
};

export default removeTab;
