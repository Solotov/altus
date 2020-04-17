import { ipcRenderer } from "electron";

const openExternalLink = (link: string): void => {
  ipcRenderer.send("open-link", link);
};

export default openExternalLink;
