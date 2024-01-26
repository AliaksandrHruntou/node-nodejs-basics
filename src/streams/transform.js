import { Transform } from 'stream';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, next) {
            this.push(chunk.toString().split("").reverse().join(""));
            next();
        }
    });

    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();