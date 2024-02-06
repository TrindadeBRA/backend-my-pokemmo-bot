const robot = require('robotjs');
const sleep = require('./sleep');
const pressKeyForDuration = require('./pressKeyForDuration');

async function searchPokemonInGrass() {
    try {
        await pressKeyForDuration('left', 50);
        await pressKeyForDuration('right', 50);
        
        return { message: "searchPokemonInGrass made successfully." };
    } catch (error) {
        console.error(error);
        throw new Error('Error in searchPokemonInGrass');
    } 
}

module.exports = searchPokemonInGrass;
