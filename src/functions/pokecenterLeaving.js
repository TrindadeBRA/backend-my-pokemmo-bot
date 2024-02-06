const robot = require('robotjs');
const sleep = require('./sleep');
const pressKeyForDuration = require('./pressKeyForDuration');


async function pokecenterLeaving() {
    try {

        pressKeyForDuration('down', 50);
        await sleep(1000);
        pressKeyForDuration('down', 50);
        await sleep(1000);
        pressKeyForDuration('down', 50);
        await sleep(1000);
        pressKeyForDuration('down', 50);
        await sleep(1000);
        pressKeyForDuration('down', 50);
        await sleep(2500);
        

        return { message: "pokecenterLeaving successfully." };
    } catch (error) {
        console.error(error);
        throw new Error('Error in pokecenterLeaving');
    } 
}

module.exports = pokecenterLeaving;
