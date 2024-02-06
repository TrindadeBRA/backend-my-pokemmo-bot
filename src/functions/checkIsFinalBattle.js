const robot = require('robotjs');
const Tesseract = require('tesseract.js');

async function checkIsFinalBattle(imagePath) {
    try {
        const { data: { text } } = await Tesseract.recognize(
            imagePath,
            'eng'
        );

        // console.log(text);

        // Expressão regular para procurar "LUTAR" ou "FIGHT"
        const regex = /\b(picked up)\b/i;
        const match = text.match(regex);

        return match !== null;
    } catch (error) {
        throw new Error('Error in checkIsFinalBattle');
    }
}

module.exports = checkIsFinalBattle;
