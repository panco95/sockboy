const { ipcRenderer } = require('electron')
const { shell } = require('electron');

window.onload = function () {
    document.querySelector('#ws_client').onclick = function () {
        ipcRenderer.send('openWsClient')
    }
    document.querySelector('#open_homepage').onclick = function () {
        const url = "https://github.com/panco95/sockboy";
        shell.openExternal(url);
    }
}
