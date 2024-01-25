import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        const fileContent = await fs.readFile(filePath, {encoding: "utf-8"});
        console.log(fileContent);
        console.log("FS operation succeed");
    } catch {
        throw new Error("FS operation failed");
    }
};

await read();