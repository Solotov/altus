const changeActiveTab = (
  id: string,
  prevState: TabState,
  stateHandler: Function
): void => {
  stateHandler({
    ...prevState,
    activeTabId: id,
    welcomePageHidden: true
  });
};

export default changeActiveTab;
