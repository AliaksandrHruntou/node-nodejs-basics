import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, 'files');
const destDir = path.join(__dirname, 'files_copy');

const copy = async () => {
    try {
        await fs.cp(srcDir, destDir, {recursive: true, errorOnExist: true, force: false});
        console.log("FS operation succeed");
    } catch {
        throw new Error("FS operation failed");
    }
};

await copy();