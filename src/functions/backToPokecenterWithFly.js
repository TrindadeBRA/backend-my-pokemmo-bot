const robot = require('robotjs');
const sleep = require('./sleep');
const pressKeyForDuration = require('./pressKeyForDuration');

async function backToPokecenterWithFly() {
    try {
        pressKeyForDuration('8', 50);
        await sleep(1500);
        pressKeyForDuration('left', 5);
        await sleep(1000);
        pressKeyForDuration('z', 50);

        return { message: "backToPokecenterWithFly made successfully." };
    } catch (error) {
        console.error(error);
        throw new Error('Error in backToPokecenterWithFly');
    } 
}

module.exports = backToPokecenterWithFly;
