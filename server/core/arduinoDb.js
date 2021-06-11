class arduinoDb {
    static async read() {
        throw new Error("Method 'read' is not overwrited")
    }
    static async save(arduino) {
        throw new Error("Method 'save' is not overwrited")
    }
}

module.exports = arduinoDb