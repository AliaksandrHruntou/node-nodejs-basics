import * as path from 'node:path';
import { stdout } from 'node:process';
import { fileURLToPath } from 'node:url';
import { createReadStream } from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    const content = createReadStream(filePath);

    content.pipe(stdout);
};

await read();