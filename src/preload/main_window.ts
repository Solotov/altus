import { Titlebar, Color } from "custom-electron-titlebar";
import { ipcRenderer } from "electron";

// Set custom titlebar
document.addEventListener("DOMContentLoaded", () => {
  new Titlebar({
    backgroundColor: Color.fromHex("#151619"),
    icon: ".",
    itemBackgroundColor: Color.fromHex("#1d1f22")
  });
});

// Add ipcRenderer to window object to use with React
(window as any).ipcRenderer = ipcRenderer;
