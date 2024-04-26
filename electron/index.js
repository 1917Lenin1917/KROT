const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        autoHideMenuBar: true,
        width: 1208.2,
        // resizable: false,
        height: 752.5,
        title: "KROT",
        enableLargerThanScreen: false
    })
    win.removeMenu()
    win.loadURL('http://localhost:5173/home')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit()
})
