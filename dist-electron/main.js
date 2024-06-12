import { app as n, BrowserWindow as l } from "electron";
n.whenReady().then(() => {
  const e = new l({
    title: "MAGIC MIRROR",
    fullscreenable: !0,
    fullscreen: !0,
    simpleFullscreen: !0,
    webPreferences: {
      nodeIntegration: !0,
      webSecurity: !1
    }
  });
  e.setMenu(null), process.env.VITE_DEV_SERVER_URL ? e.loadURL(process.env.VITE_DEV_SERVER_URL) : e.loadFile("dist/index.html");
});
