const robot = require('robotjs');
const sleep = require('./sleep');
const pressKeyForDuration = require('./pressKeyForDuration');


async function pokecenterTalkWithNurseJoy() {
    try {
        pressKeyForDuration('z', 50);
        await sleep(1000);
        pressKeyForDuration('z', 50);
        await sleep(1000);
        pressKeyForDuration('z', 50);
        await sleep(1000);
        pressKeyForDuration('z', 50);
        await sleep(1000);
        pressKeyForDuration('z', 50);
        await sleep(1000);
        pressKeyForDuration('z', 50);
        await sleep(1000);
        pressKeyForDuration('z', 50);
        await sleep(1000);
        
        return { message: "pokecenterTalkWithNurseJoy successfully." };
    } catch (error) {
        console.error(error);
        throw new Error('Error in pokecenterTalkWithNurseJoy');
    } 
}

module.exports = pokecenterTalkWithNurseJoy;
