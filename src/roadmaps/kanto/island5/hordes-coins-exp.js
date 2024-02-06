const pressKeyForDuration = require('../../../functions/pressKeyForDuration')
const sleep = require('../../../functions/sleep')
const clickInitial = require('../../../functions/clickInitial')
const pokecenterEnter = require('../../../functions/pokecenterEnter')
const pokecenterWalkToCure = require('../../../functions/pokecenterWalkToCure')
const pokecenterTalkWithNurseJoy = require('../../../functions/pokecenterTalkWithNurseJoy')
const pokecenterLeaving = require('../../../functions/pokecenterLeaving')
const goToSpot = require('../../../functions/goToSpot')
const useSweetScent = require('../../../functions/useSweetScent')
const deleteImage = require('../../../functions/deleteImage')
const gameplayHudPrintAndSave = require('../../../functions/gameplayHudPrintAndSave')
const checkIfCanFight = require('../../../functions/checkIfCanFight')
const attackWithSlot1 = require('../../../functions/attackWithSlot1')
const attackWithSlot2 = require('../../../functions/attackWithSlot2')
const checkIsFinalBattle = require('../../../functions/checkIsFinalBattle')
const backToPokecenterWithFly = require('../../../functions/backToPokecenterWithFly')
const backToPokecenter = require('../../../functions/backToPokecenter')

async function hordesCoinsExp(io) {
    try {

        io.emit('progress', { message: "Aguardando 3 segundos" });
        await sleep(3000);

        io.emit('progress', { message: "Executando o clique inicial" });
        await clickInitial();

        io.emit('progress', { message: "Entrando no Pokecenter" });
        await pokecenterEnter();

        io.emit('progress', { message: "Indo curar os pokemons no Pokecenter" });
        await pokecenterWalkToCure();

        io.emit('progress', { message: "Conversando com a enfermeira Joy" });
        await pokecenterTalkWithNurseJoy();

        io.emit('progress', { message: "Saindo do Pokecenter" });
        await pokecenterLeaving();

        io.emit('progress', { message: "Indo ao Spot" });
        await goToSpot();

        for (let i = 0; i < 4; i++) {

            io.emit('progress', { message: "usando SweetScent" });
            await useSweetScent();

            io.emit('progress', { message: "Aguardando iniciar batalha" });
            let canFight = null;
            while (canFight === false || canFight === null) {
                const imagePath = await gameplayHudPrintAndSave();
                canFight = await checkIfCanFight(imagePath);
                await sleep(500);
                await deleteImage(imagePath);
            }

            io.emit('progress', { message: "Primeiro ataque - SLOT01" });
            await attackWithSlot1();

            io.emit('progress', { message: "Aguardando para dar o segundo ataque" });
            canFight = null;
            while (canFight === false || canFight === null) {
                const imagePath = await gameplayHudPrintAndSave();
                canFight = await checkIfCanFight(imagePath);
                await sleep(500);
                await deleteImage(imagePath);
            }

            io.emit('progress', { message: "Segundo ataque - SLOT02" });
            await attackWithSlot2();

            io.emit('progress', { message: "Aguardando finalizar batalha" });

            let isFinalBattle = null;
            while (isFinalBattle === false || isFinalBattle === null) {
                const imagePath = await gameplayHudPrintAndSave();
                isFinalBattle = await checkIsFinalBattle(imagePath);
                await sleep(250);
                await deleteImage(imagePath);
            }
            io.emit('progress', { message: "Batalha finalizada" });
            await sleep(2000);
        }

        io.emit('progress', { message: "Voltando ao pokecenter" });
        await backToPokecenter();

        io.emit('completion');

        return { message: "Bot concluído!" };
    } catch (error) {
        console.error(error);
        throw new Error('Ocorreu um erro no bot.');
    }
}

module.exports = { hordesCoinsExp };
