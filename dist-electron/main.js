import { app, BrowserWindow } from "electron";
app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    title: "MAGIC MIRROR",
    fullscreenable: true,
    fullscreen: true,
    simpleFullscreen: true,
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.setMenu(null);
  mainWindow.webContents.openDevTools();
  if (process.env.VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile("dist/index.html");
  }
});
