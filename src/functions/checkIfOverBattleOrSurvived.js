const robot = require('robotjs');
const Tesseract = require('tesseract.js');

async function checkIfOverBattleOrSurvived(imagePath) {
    try {
        const { data: { text } } = await Tesseract.recognize(
            imagePath,
            'eng'
        );

        // Expressão regular para procurar "a wild" seguido pelo nome do Pokémon
        const survivorRegex = /\b(LUTAR|FIGHT)\b/i;
        const faintedRegex = /fainted/i;

        if (survivorRegex.test(text)) {
            console.log("O pokemon não morreu!")
            return "survivor";
        } else if (faintedRegex.test(text)) {
            console.log("O pokemon morreu!")
            return "fainted";
        } else {
            return null; // Retorna nulo se nenhum Pokémon for encontrado
        }
    } catch (error) {
        throw new Error('Error in checkIfOverBattleOrSurvived');
    }
}


module.exports = checkIfOverBattleOrSurvived;
