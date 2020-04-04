const closeTabModal = (stateHandler: Function): void => {
  stateHandler((prev: TabState) => {
    return {
      ...prev,
      tabModalOpen: false,
      editTab: ""
    };
  });
};

export default closeTabModal;
