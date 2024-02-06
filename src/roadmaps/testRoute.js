const clickInitial = require('../functions/clickInitial')
const sleep = require('../functions/sleep')

async function runTestRoute(io) {
    try {
        io.emit('progress', { message: "Aguardando 1 segundo..." });
        await sleep(1000);

        io.emit('progress', { message: "Aguardando 2 segundos..." });
        await sleep(2000);

        io.emit('progress', { message: "Aguardando 3 segundos..." });
        await sleep(3000);

        io.emit('progress', { message: "Executando a função clickInitial..." });
        const resultClick = await clickInitial();
        io.emit('result', resultClick);

        io.emit('completion');

        return { message: "Bot concluído!" };
    } catch (error) {
        console.error(error);
        throw new Error('Ocorreu um erro no bot.');
    }
}

module.exports = { runTestRoute };
