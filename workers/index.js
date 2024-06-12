const express = require('express');
const { Worker } = require('worker_threads');

const app = express();

app.get('/non-blocking', (req, res) => {
    return res.status(200).send('No blocking Page');
})

app.get('/blocking', (req, res) => {
    const worker = new Worker("./worker.js");

    worker.on('message', (data) => {
        res.status(200).send(`Blocking Page ${data}`)
    })
})

app.listen(3001, () => console.log('Server is running on PORT 3001'))