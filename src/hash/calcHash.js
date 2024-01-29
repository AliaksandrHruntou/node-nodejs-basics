import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
const { createHash } = await import('node:crypto');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const hash = createHash('sha256');
    const input = createReadStream(filePath);
    input.pipe(hash).setEncoding('hex').pipe(stdout);    
};

await calculateHash();