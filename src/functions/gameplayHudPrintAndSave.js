const robot = require('robotjs');

async function gameplayHudPrintAndSave() {
    try {

        const screen = robot.screen.capture(280, 650, 450, 150);

        if (!screen || !screen.image) {
            throw new Error('Falha ao capturar a tela');
        }

        const dataAtual = new Date();

        const dataFormatada = dataAtual.toISOString().replace(/[^0-9]/g, '');

        const imagesDir = path.resolve(process.cwd(), 'public/images/hud');
        if (!fs.existsSync(imagesDir)) {
            fs.mkdirSync(imagesDir, { recursive: true });
        }

        const imageName = `screenshot_${dataFormatada}.jpg`;
        const imagePath = path.resolve(imagesDir, imageName);

        await sharp(Buffer.from(screen.image), { raw: { width: screen.width, height: screen.height, channels: 4 } })
            .jpeg({ quality: 100 })
            .toFile(imagePath);

        return imagePath;

    } catch (error) {
        console.error(error);
        throw new Error('Error in gameplayHudPrintAndSave');
    }
}

module.exports = gameplayHudPrintAndSave;

