const robot = require('robotjs');
const sleep = require('./sleep');
const pressKeyForDuration = require('./pressKeyForDuration');

async function attackWithSlot2() {
    try {
        pressKeyForDuration('z', 50);
        await sleep(1000);
        pressKeyForDuration('right', 50);
        await sleep(1000);
        pressKeyForDuration('z', 50);
        await sleep(1000);
        pressKeyForDuration('z', 50);
        
        return { message: "attackWithSlot2 made successfully." };
    } catch (error) {
        console.error(error);
        throw new Error('Error in attackWithSlot2');
    } 
}

module.exports = attackWithSlot2;
