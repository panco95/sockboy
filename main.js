const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const path = require('path')

//开启websocket客户端
ipcMain.on('openWsClient', (event) => {
    const win = new BrowserWindow({
        width: 805,
        height: 570
    })
    win.loadFile('views/ws_client.html')
})

//开启主窗口
function createWindow() {
    const win = new BrowserWindow({
        width: 300,
        height: 196,
        webPreferences: {
            preload: path.join(__dirname, '/pres/pre_main.js')
        }
    })

    win.loadFile('views/main.html')
}


app.whenReady().then(() => {
    Menu.setApplicationMenu(null)
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })
})
