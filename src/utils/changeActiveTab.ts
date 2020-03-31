const changeActiveTab = (
  id: string,
  prevState: object,
  stateHandler: Function
): void => {
  stateHandler({
    ...prevState,
    activeTabId: id
  });
};

export default changeActiveTab;
