import changeActiveTab from "./changeActiveTab";

const goToNextTabLeft = (
  id: string | null,
  state: TabState,
  stateHandler: Function
): void => {
  // Get the current index of the tab.
  const currentIndex = state.tabs.findIndex(tab => tab.id === id);
  // If active tab is not the first, go to next or if it is first, then go to last.
  const nextTabId =
    currentIndex != 0
      ? state.tabs[currentIndex - 1].id
      : state.tabs[state.tabs.length - 1].id;
  // Change the active tab to next one
  changeActiveTab(nextTabId, state, stateHandler);
};

export default goToNextTabLeft;
