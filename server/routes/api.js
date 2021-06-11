var express = require('express');
var router = express.Router();
var jsonDb = require("../core/jsonDb")

router.get('/', function (req, res, next) {
    jsonDb.read()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            console.log(err);
            next(err)
        })
});

router.post('/', function (req, res, next) {
    const arduino = req.body
    jsonDb.save(arduino)
        .then(response => {
            jsonDb.read()
                .then(response => {
                    req.io.emit("updateState", response)
                    res.status(200).send("ok")
                })
                .catch(err => {
                    console.log(err);
                    next(err)
                })
        })
        .catch(err => {
            console.log(err);
            next(err)
        })
});

module.exports = router;
