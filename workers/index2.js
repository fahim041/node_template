const express = require('express');
const { Worker } = require('worker_threads');

const app = express();

function createWorker() {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./four-threads.js', {
      workerData: { thread_count: 4 },
    });

    worker.on('message', (data) => {
      resolve(data);
    });

    worker.on('error', (error) => {
      reject(error);
    });
  });
}

app.get('/non-blocking', (req, res) => {
  return res.status(200).send('No blocking Page');
});

app.get('/blocking', async (req, res) => {
  const workers = [];

  for (let i = 0; i < 4; i++) {
    workers.push(createWorker());
  }

  const thread_results = await Promise.all(workers);
  const total = thread_results[0] + thread_results[1] + thread_results[2] + thread_results[3];
  res.status(200).send(`Blocking page: ${total}`);
});

app.listen(3000, () => console.log('Server is running on PORT 3000'));
