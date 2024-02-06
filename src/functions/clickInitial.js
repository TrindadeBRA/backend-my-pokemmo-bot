const robot = require('robotjs');

function clickInitial() {
    try {
        const { x, y } = robot.getMousePos();

        const startX = 100;
        const startY = 100;

        robot.moveMouse(startX, startY);
        robot.mouseClick();
        
        return { message: "Initial click made successfully." };
    } catch (error) {
        console.error(error);
        throw new Error('Error in clickInitial');
    } 
}

module.exports = clickInitial; // Exporta a função clickInitial
