import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
const zipFilePath = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
    try {
        await pipeline(
            createReadStream(filePath),
            createGzip(),
            createWriteStream(zipFilePath),
        );
        console.log('Compress succeeded.');
    } catch (error) {
        console.log(error);
    } 
};

await compress();