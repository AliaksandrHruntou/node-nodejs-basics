import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    try {
        const data = new Uint8Array(Buffer.from('I am fresh and young'));
        await fs.writeFile(filePath, data, { flag: 'wx' });
        console.log("FS operation succeed");
    } catch {
        throw new Error("FS operation failed");
    } 
};

await create();