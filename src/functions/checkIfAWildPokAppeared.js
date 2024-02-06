const robot = require('robotjs');
const Tesseract = require('tesseract.js');

async function checkIfAWildPokAppeared(imagePath) {
    try {
        const { data: { text } } = await Tesseract.recognize(
            imagePath,
            'eng'
        );

        // Expressão regular para procurar "a wild" seguido pelo nome do Pokémon
        const wildRegex = /a wild/i;
        const hordeRegex = /Uma horda/i;

        if (wildRegex.test(text)) {
            console.log("Um pokemon localizado!")
            return "single pokemon";
        } else if (hordeRegex.test(text)) {
            console.log("Uma horda de pokemon localizada!")
            return "multiple pokemon";
        } else {
            return null; // Retorna nulo se nenhum Pokémon for encontrado
        }
    } catch (error) {
        throw new Error('Error in checkIfAWildPokAppeared');
    }
}


module.exports = checkIfAWildPokAppeared;
