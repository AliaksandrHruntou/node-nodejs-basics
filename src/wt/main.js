import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workerPath = path.join(__dirname, 'worker.js');

let initNum = 10;

function runService(workerData) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, { workerData });
      worker.on('message', data => resolve({
        status: "resolved",
        data
      }));
      worker.on('error', () => resolve({
        status: "error",
        data: null
      }));
      worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      })
    })
  }

const performCalculations = async () => {
    const workers = [];
    for (let i = 0; i < cpus().length; i++) {
        workers.push(runService(initNum + i));
    }
    const resultsArray = await Promise.all(workers);
    console.log(resultsArray);
};

await performCalculations();