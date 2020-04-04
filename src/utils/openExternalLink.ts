const openExternalLink = (link: string): void => {
  (window as any).ipcRenderer.send("open-link", link);
};

export default openExternalLink;
