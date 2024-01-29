const parseArgs = () => {
    const args = process.argv.slice(2);
    const handledArgs = [];
    for (let i = 0; i < args.length; i++) {
        if(i%2 == 0) handledArgs.push(`${args[i].slice(2)} is ${args[i+1]}`)
    }
    console.log(handledArgs.join(', '));
};

parseArgs();