const arduinoDb = require("./arduinoDb")
const axios = require("axios")

class jsonDb extends arduinoDb {
    static async read() {
        return new Promise(async (resolve, reject) => {
            const res = await axios.get(`${process.env.JSON_SERVER_URL}/arduinos`)
            if (res.status == 200) {
                resolve(res.data)
            } else {
                reject()
            }
        })
    }

    static async save(arduino) {
        return new Promise(async (resolve, reject) => {
            const res = await axios.put(`${process.env.JSON_SERVER_URL}/arduinos/${arduino.id}`, {
                id: arduino.id,
                location: arduino.location,
                floor: arduino.floor,
                service: arduino.service,
                state: arduino.state,
            })
            if (res.status == 200) {
                resolve("ok") 
            } else {
                reject()
            }
        })
    }
}

module.exports = jsonDb