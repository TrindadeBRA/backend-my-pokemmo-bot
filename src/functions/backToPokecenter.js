const robot = require('robotjs');
const sleep = require('./sleep');
const pressKeyForDuration = require('./pressKeyForDuration');

async function backToPokecenter() {
    try {
        await sleep(1000);
        pressKeyForDuration('down', 50);
        await sleep(1000);
        pressKeyForDuration('down', 50);
        await sleep(1000);
        pressKeyForDuration('down', 50);
        await sleep(1000);
        pressKeyForDuration('down', 50);
        await sleep(1000);
        pressKeyForDuration('down', 50);

        await sleep(1000);
        pressKeyForDuration('left', 50);
        await sleep(1000);
        pressKeyForDuration('left', 50);
        await sleep(1000);
        pressKeyForDuration('left', 50);
        await sleep(1000);
        pressKeyForDuration('left', 50);
        await sleep(1000);
        pressKeyForDuration('left', 50);
        await sleep(1000);
        pressKeyForDuration('left', 50);
        await sleep(1000);
        pressKeyForDuration('left', 50);
        await sleep(1000);
        pressKeyForDuration('left', 50);
        await sleep(1000);
        pressKeyForDuration('left', 50);
        await sleep(1000);
        pressKeyForDuration('left', 50);
        await sleep(1000);
        pressKeyForDuration('left', 50);
        await sleep(1000);
        pressKeyForDuration('left', 50);
        await sleep(1000);
        pressKeyForDuration('left', 50);
        await sleep(1000);
        pressKeyForDuration('left', 50);

        await sleep(1000);
        pressKeyForDuration('up', 50);
        await sleep(1000);
        pressKeyForDuration('up', 50);
        await sleep(1000);
        pressKeyForDuration('up', 50);
        await sleep(1000);
        pressKeyForDuration('up', 50);
        await sleep(1000);
        pressKeyForDuration('up', 50);
        await sleep(1000);

        pressKeyForDuration('right', 50);
        await sleep(1000);
        pressKeyForDuration('right', 50);
        await sleep(1000);
        pressKeyForDuration('right', 50);
        await sleep(1000);
        pressKeyForDuration('right', 50);
        await sleep(1000);
        pressKeyForDuration('right', 50);

        await sleep(2500);

        return { message: "backToPokecenter made successfully." };
    } catch (error) {
        console.error(error);
        throw new Error('Error in backToPokecenter');
    } 
}

module.exports = backToPokecenter;
