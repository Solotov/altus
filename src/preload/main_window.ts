import { Titlebar, Color } from "custom-electron-titlebar";

document.addEventListener("DOMContentLoaded", () => {
  const titlebar = new Titlebar({
    backgroundColor: Color.fromHex("#21252B")
  });
});
