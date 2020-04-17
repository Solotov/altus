import { BrowserWindow, app } from "electron";

const mainMenu = [
  {
    label: "File",
    submenu: [
      {
        label: "Force Reload",
        accelerator: "CmdOrCtrl+Shift+R",
        click(): void {
          const window = BrowserWindow.getFocusedWindow();
          window.webContents.reload();
        },
      },
      {
        label: "Quit",
        accelerator: "CmdOrCtrl+Q",
        click(): void {
          app.quit();
        },
      },
    ],
  },
  {
    label: "Window",
    submenu: [
      {
        label: "Close Active Tab",
        accelerator: "CmdOrCtrl+W",
        click(): void {
          BrowserWindow.getFocusedWindow().webContents.send("close-tab");
        },
      },
      {
        label: "Go to Next Tab",
        accelerator: "CmdOrCtrl+Tab",
        click(): void {
          BrowserWindow.getFocusedWindow().webContents.send("goto-next-tab");
        },
      },
      {
        label: "Go to Previous Tab",
        accelerator: "CmdOrCtrl+Shift+Tab",
        click(): void {
          BrowserWindow.getFocusedWindow().webContents.send(
            "goto-previous-tab"
          );
        },
      },
    ],
  },
];

if (!app.isPackaged) {
  mainMenu[0].submenu = [
    {
      label: "Open DevTools",
      accelerator: "CmdOrCtrl+Shift+I",
      click(): void {
        const window = BrowserWindow.getFocusedWindow();
        window.webContents.openDevTools();
      },
    },
    ...mainMenu[0].submenu,
  ];
}

export default mainMenu;
