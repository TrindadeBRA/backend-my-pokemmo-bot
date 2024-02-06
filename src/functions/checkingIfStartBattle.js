const robot = require('robotjs');
const Tesseract = require('tesseract.js');
const gameplayHudPrintAndSave = require('./gameplayHudPrintAndSave')
const checkIfAWildPokAppeared = require('./checkIfAWildPokAppeared')
const checkIfCanFight = require('./checkIfCanFight')
const deleteImage = require('./deleteImage')



async function checkingIfStartBattle(imagePath) {
    let startTheBattle = null;
    while (!startTheBattle) {

        let imagePath = await gameplayHudPrintAndSave();

        startTheBattle = await checkIfAWildPokAppeared(imagePath);
        console.log(startTheBattle)

        await deleteImage(imagePath);


        console.log("n/a")
    }
    console.log("ACHOU A WILD ou LUTAR!")
}


module.exports = checkingIfStartBattle;


