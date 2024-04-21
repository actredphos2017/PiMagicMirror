import { app, BrowserWindow } from 'electron'

app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        title: 'MAGIC MIRROR',
        fullscreenable: true,
        fullscreen: true,
        simpleFullscreen: true
    });

    mainWindow.setMenu(null);

    // You can use `process.env.VITE_DEV_SERVER_URL` when the vite command is called `serve`
    if (process.env.VITE_DEV_SERVER_URL) {
        mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
    } else {
        // Load your file
        mainWindow.loadFile('dist/index.html');
    }
});