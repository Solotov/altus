import { Titlebar, Color } from "custom-electron-titlebar";

// Set custom titlebar
document.addEventListener("DOMContentLoaded", () => {
  new Titlebar({
    backgroundColor: Color.fromHex("#151619"),
    icon: ".",
    itemBackgroundColor: Color.fromHex("#1d1f22"),
  });
});
