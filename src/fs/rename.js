import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const oldNamePath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newNamePath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    try {
        await fs.rename(oldNamePath, newNamePath);
        console.log("FS operation succeed");
    } catch {
        throw new Error("FS operation failed");
    }
};

await rename();