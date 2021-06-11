function getArduinoState(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}

function setData(arduinos) {
    arduinos.forEach(arduino => {
        const box = document.getElementById(arduino.id)
        if (arduino.state === 1) {
            box.style["background-color"] = "green"
        } else {
            box.style["background-color"] = "grey"
        }
    })
}

setData(getArduinoState(`http://${document.location.hostname}:8080/api`))

const socket = io.connect(`http://${document.location.hostname}:8081`)
socket.on('connect', data => {
    socket.emit("connection")
})
socket.on('updateState', arduinos => {
    setData(arduinos)
})