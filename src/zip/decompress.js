import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'archive.gz');
const unzipFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
    try {
        await pipeline(
            createReadStream(filePath),
            createGunzip(),
            createWriteStream(unzipFilePath),
        );
        console.log('Decompress succeeded.');
    } catch (error) {
        console.log(error);
    } 
};

await decompress();