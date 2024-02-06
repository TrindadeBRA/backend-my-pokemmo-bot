const clickInitial = require('../../../functions/clickInitial')
const sleep = require('../../../functions/sleep')
const pokecenterEnter = require('../../../functions/pokecenterEnter')
const pokecenterWalkToCure = require('../../../functions/pokecenterWalkToCure')
const pokecenterTalkWithNurseJoy = require('../../../functions/pokecenterTalkWithNurseJoy')
const pokecenterLeaving = require('../../../functions/pokecenterLeaving')
const goToSpot = require('../../../functions/goToSpot')
const useSweetScent = require('../../../functions/useSweetScent')

async function hordesCoinsExp(io) {
    try {
        
        io.emit('progress', { message: "Aguardando 1.5 segundos" });
        await sleep(1500);

        io.emit('progress', { message: "Executando o clique inicial" });
        await clickInitial();

        // io.emit('progress', { message: "Entrando no Pokecenter" });
        // await pokecenterEnter();

        // io.emit('progress', { message: "Indo curar os pokemons no Pokecenter" });
        // await pokecenterWalkToCure();

        // io.emit('progress', { message: "Conversando com a enfermeira Joy" });
        // await pokecenterTalkWithNurseJoy();

        // io.emit('progress', { message: "Saindo no Pokecenter" });
        // await pokecenterLeaving();

        // io.emit('progress', { message: "Indo ao Spot" });
        // await goToSpot();

        io.emit('progress', { message: "usando SweetScent" });
        await useSweetScent();

        



        io.emit('completion');

        return { message: "Bot concluído!" };
    } catch (error) {
        console.error(error);
        throw new Error('Ocorreu um erro no bot.');
    }
}

module.exports = { hordesCoinsExp };
