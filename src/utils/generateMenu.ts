import {
  MenuItemConstructorOptions,
  BrowserWindow,
  app,
  ipcMain
} from "electron";

const mainMenu: Array<MenuItemConstructorOptions> = [
  {
    label: "File",
    submenu: [
      ...[
        !app.isPackaged
          ? {
              label: "Open DevTools",
              accelerator: "CmdOrCtrl+Shift+I",
              click(): void {
                const window = BrowserWindow.getFocusedWindow();
                window.webContents.openDevTools();
              }
            }
          : {}
      ],
      {
        label: "Force Reload",
        accelerator: "CmdOrCtrl+Shift+R",
        click(): void {
          const window = BrowserWindow.getFocusedWindow();
          window.webContents.reload();
        }
      },
      {
        label: "Quit",
        accelerator: "CmdOrCtrl+Q",
        click(): void {
          app.quit();
        }
      }
    ]
  }
];

export default mainMenu;
