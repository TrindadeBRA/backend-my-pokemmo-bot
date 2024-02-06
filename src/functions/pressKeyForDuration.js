const robot = require('robotjs');

async function pressKeyForDuration(key, duration) {
    return new Promise((resolve, reject) => {
        try {
            robot.keyToggle(key, 'down');
            setTimeout(() => {
                robot.keyToggle(key, 'up');
                resolve();
            }, duration);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = pressKeyForDuration;
