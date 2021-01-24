const electron = require("electron");
const url = require("url");
const path = require("path");
const { input } = require("@tensorflow/tfjs");

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow, inputModal;

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

renderInputModal = (inputChoiceID) => {
    inputModal = new BrowserWindow({
        modal: true,
        parent: mainWindow,
        width: 450,
        height: 250,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        },
        show: false,
        frame: false,
        transparent: true
    });

    inputModal.loadURL(url.format({
        pathname: path.join(__dirname, "/components/input.modal/index.html"),
        protocol: "file:",
        slashes: true
    }));

    inputModal.once('ready-to-show', () => {
        inputModal.show();
    });

    inputModal.setMenuBarVisibility(false);

    inputModal.on("close", () => {
        inputModal = null;
    })

    inputModal.webContents.on('did-finish-load', () => {
        inputModal.webContents.send('data:inputChoiceID', inputChoiceID);
    });
}

ipcMain.on("action:main", (event, action) => {
    action === "close" ? mainWindow.close() : mainWindow.minimize();
})

ipcMain.on("render:modal", (event, inputChoiceID) => {
    renderInputModal(inputChoiceID);
});

ipcMain.on("close:modal", (event) => {
    inputModal.close();
    mainWindow.webContents.send('close:modal');
});

ipcMain.on("upload:modal", (event, fileData) => {
    inputModal.close();
    mainWindow.webContents.send('upload:modal', fileData);
});