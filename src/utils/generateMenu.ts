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
];

if (app.isPackaged) {
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
