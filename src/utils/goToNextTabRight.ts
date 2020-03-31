import changeActiveTab from "./changeActiveTab";

const goToNextTabRight = (
  id: string | null,
  state: TabState,
  stateHandler: Function
): void => {
  // Get the current index of the tab.
  const currentIndex = state.tabs.findIndex(tab => tab.id === id);
  // If active tab is not the last, go to next or if it is last, then go to first.
  const nextTabId =
    currentIndex != state.tabs.length - 1
      ? state.tabs[currentIndex + 1].id
      : state.tabs[0].id;
  // Change the active tab to next one
  changeActiveTab(nextTabId, state, stateHandler);
};

export default goToNextTabRight;
