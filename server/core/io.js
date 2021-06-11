module.exports = (server) => { 
    const io = require('socket.io')(server, {
        cors: {
            origin: "*",
            method: ['GET','POST']
        }
    });
    io.on('connection', () => {
        console.log("ok");
    })
    io.on('test', () => {
        console.log("co");
    })
    return io
}