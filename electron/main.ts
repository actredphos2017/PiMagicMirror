import {app, BrowserWindow} from 'electron'

app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        title: 'MAGIC MIRROR',
        fullscreenable: true,
        fullscreen: true,
        simpleFullscreen: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.setMenu(null);
    mainWindow.webContents.openDevTools();

    // You can use `process.env.VITE_DEV_SERVER_URL` when the vite command is called `serve`
    if (process.env.VITE_DEV_SERVER_URL) {
        mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
    } else {
        // Load your file
        mainWindow.loadFile('dist/index.html');
    }
});