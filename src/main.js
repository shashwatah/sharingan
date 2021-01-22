const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on("ready", function() {
    renderMainWindow();
});

renderMainWindow = () => {
    mainWindow = new BrowserWindow({
        width: 850,
        height: 550,
        resizable: false,
        title: "Sharingan",
        webPreferences: {
            nodeIntegration: true
        },
        show: false,
        frame: false
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "/components/main.window/index.html"),
        protocol: "file:",
        slashes: true
    }));

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    mainWindow.setMenuBarVisibility(false);

    mainWindow.on("closed", function() {
        app.quit();
    });
}

ipcMain.on("action:main", (event, action) => {
    action === "close" ? mainWindow.close() : mainWindow.minimize();
})