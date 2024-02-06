const robot = require('robotjs');
const sleep = require('./sleep');
const pressKeyForDuration = require('./pressKeyForDuration');


async function pokecenterEnter() {
    try {

        pressKeyForDuration('up', 50);
        await sleep(2500);
        

        return { message: "pokecenterEnter successfully." };
    } catch (error) {
        console.error(error);
        throw new Error('Error in pokecenterEnter');
    } 
}

module.exports = pokecenterEnter;
