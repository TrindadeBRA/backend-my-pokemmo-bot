const robot = require('robotjs');
const sleep = require('./sleep');
const pressKeyForDuration = require('./pressKeyForDuration');


async function pokecenterWalkToCure() {
    try {

        pressKeyForDuration('up', 50);
        await sleep(1000);
        pressKeyForDuration('up', 50);
        await sleep(1000);
        pressKeyForDuration('up', 50);
        await sleep(1000);
        pressKeyForDuration('up', 50);
        await sleep(1000);
        

        return { message: "pokecenterWalkToCure successfully." };
    } catch (error) {
        console.error(error);
        throw new Error('Error in pokecenterWalkToCure');
    } 
}

module.exports = pokecenterWalkToCure;
