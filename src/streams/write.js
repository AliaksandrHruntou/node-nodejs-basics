import * as path from 'node:path';
import { stdin } from 'node:process';
import { fileURLToPath } from 'node:url';
import { createWriteStream } from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {

const file = createWriteStream(filePath);
stdin.pipe(file);

};

await write();