const openTabModal = (stateHandler: Function): void => {
  stateHandler((prev: TabState) => {
    return {
      ...prev,
      tabModalOpen: true
    };
  });
};

export default openTabModal;
