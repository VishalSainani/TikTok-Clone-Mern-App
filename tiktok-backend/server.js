import mongoose from "mongoose";
import express from "express";
import Data from './data.js'
import Videos from './dbModel.js'
// app config
const app = express();
const port = process.env.PORT || 8080;


// Middlewares
app.use(express.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// Db config
const connection_url = "mongodb+srv://admin:1234@cluster0.fzy2o9r.mongodb.net/tiktok?retryWrites=true&w=majority"
mongoose.connect(connection_url, err => {
    if (err) throw err;
    console.log('connected to MongoD')
});


// api endpoints

app.get('/', (req, res) => {
    res.status(200).send("Hello WOrld")
})

app.get('/v1/posts', (req, res) => {
    res.status(200).send(Data)
})
app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err)

        }
        else {
            res.status(200).send(data)

        }
    })

})

app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body

    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err)

        }
        else {
            res.status(201).send(data)

        }
    })

})


// Listen
app.listen(port, () => {
    console.log("Listening on local host port :" + port);
})