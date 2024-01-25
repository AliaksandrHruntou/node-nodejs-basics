const parseEnv = () => {
    let args = [];
    for (let n in process.env) {
        if (n.startsWith("RSS_")) args.push(`${n}=${process.env[n]}`)
    }
    console.log(args.join("; "));
};

parseEnv();