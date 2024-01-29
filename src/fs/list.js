import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filesPath = path.join(__dirname, 'files');

const list = async () => {
    try {
        const files = await fs.readdir(filesPath);
        for (const file of files)
        console.log(file);
        console.log("FS operation succeed");
    } catch {
        throw new Error("FS operation failed");
    }
};

await list();