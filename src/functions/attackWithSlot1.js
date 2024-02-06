const robot = require('robotjs');
const sleep = require('./sleep');
const pressKeyForDuration = require('./pressKeyForDuration');

async function attackWithSlot1() {
    try {
        pressKeyForDuration('z', 50);
        await sleep(1000);
        pressKeyForDuration('z', 50);
        await sleep(1000);
        pressKeyForDuration('z', 50);
        await sleep(1000);
        pressKeyForDuration('z', 50);
        
        return { message: "attackWithSlot1 made successfully." };
    } catch (error) {
        console.error(error);
        throw new Error('Error in attackWithSlot1');
    } 
}

module.exports = attackWithSlot1;
