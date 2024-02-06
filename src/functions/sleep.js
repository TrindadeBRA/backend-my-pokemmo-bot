function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ message: `Sleep ${ms}ms completed.` });
        }, ms);
    });
}

module.exports = sleep; // Exporta a função clickInitial
