const sleep = require('../../../functions/sleep')
const clickInitial = require('../../../functions/clickInitial')
const searchPokemonInGrass = require('../../../functions/searchPokemonInGrass')
const gameplayHudPrintAndSave = require('../../../functions/gameplayHudPrintAndSave')
const deleteImage = require('../../../functions/deleteImage')
const checkIfCanFight = require('../../../functions/checkIfCanFight')
const attackWithSlot1 = require('../../../functions/attackWithSlot1')
const attackWithSlot2 = require('../../../functions/attackWithSlot2')
const checkingIfStartBattle = require('../../../functions/checkingIfStartBattle')
const checkIfAWildPokAppeared = require('../../../functions/checkIfAWildPokAppeared')
const checkIfOverBattleOrSurvived = require('../../../functions/checkIfOverBattleOrSurvived')



async function payDayFarm(io) {
    try {

        io.emit('progress', { message: "Aguardando 3 segundos" });
        await sleep(3000);

        io.emit('progress', { message: "Executando o clique inicial" });
        await clickInitial();

        for (let i = 0; i < 10; i++) {
            io.emit('progress', { message: "Aguardando achar uma batalha" });
            let findPokemon = null;
            while (findPokemon === false || findPokemon === null) {
                await searchPokemonInGrass();
                let imagePath = await gameplayHudPrintAndSave();
                findPokemon = await checkIfAWildPokAppeared(imagePath);
                await deleteImage(imagePath);
            }


            io.emit('progress', { message: "Batalha encontrada, aguardando para atacar" });
            let canFight = null;
            while (canFight === false || canFight === null) {
                const imagePath = await gameplayHudPrintAndSave();
                canFight = await checkIfCanFight(imagePath);
                await deleteImage(imagePath);
            }
            await sleep(1000);

            if (findPokemon === "single pokemon") {
                io.emit('progress', { message: "Ataque - SLOT01" });
                await attackWithSlot1();

                let survivorOrFainted = null;
                while (survivorOrFainted === false || survivorOrFainted === null) {
                    const imagePath = await gameplayHudPrintAndSave();
                    survivorOrFainted = await checkIfOverBattleOrSurvived(imagePath);
                    await deleteImage(imagePath);
                }

                if (survivorOrFainted === "survivor") {
                    io.emit('progress', { message: "Ataque - SLOT02" });
                    await attackWithSlot2();
                    await sleep(1000);
                }

            } else if (findPokemon === "multiple pokemon") {
                io.emit('progress', { message: "Ataque - SLOT02" });
                await attackWithSlot2();
            }
        }


        io.emit('completion');

        return { message: "Bot concluído!" };
    } catch (error) {
        console.error(error);
        throw new Error('Ocorreu um erro no bot.');
    }
}

module.exports = { payDayFarm };
