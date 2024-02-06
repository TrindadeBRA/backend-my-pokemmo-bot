const robot = require('robotjs');

async function runBot() {
    try {
        // Move o mouse para as coordenadas (100, 100) e clica
        robot.moveMouse(100, 100);
        robot.mouseClick();

        return "Bot deu um click! 100x100";
    } catch (error) {
        console.error(error);
        throw new Error('Ocorreu um erro no click. 100x100');
    }
}

module.exports = { runBot };
