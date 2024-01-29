import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    try {
        await fs.unlink(filePath);
        console.log("FS operation succeed");
    } catch {
        throw new Error("FS operation failed");
    }
};

await remove();