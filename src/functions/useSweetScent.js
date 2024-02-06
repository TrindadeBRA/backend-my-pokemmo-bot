const robot = require('robotjs');
const sleep = require('./sleep');
const pressKeyForDuration = require('./pressKeyForDuration');


async function useSweetScent() {
    try {

        pressKeyForDuration('9', 50);
        await sleep(2500);

        return { message: "useSweetScent successfully." };
    } catch (error) {
        console.error(error);
        throw new Error('Error in useSweetScent');
    }
}

module.exports = useSweetScent;
