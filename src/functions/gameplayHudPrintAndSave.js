const robot = require('robotjs');
const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

async function gameplayHudPrintAndSave() {
    try {
        // Obtém as dimensões do primeiro monitor
        const screenWidth = 450;
        const screenHeight = 120;

        // Captura a tela do primeiro monitor
        const screen = robot.screen.capture(280, 700, screenWidth, screenHeight);

        // Verifica se a captura foi bem-sucedida
        if (!screen || !screen.image) {
            throw new Error('Falha ao capturar a tela');
        }

        // Formata a data atual para nomear a imagem
        const dataAtual = new Date();
        const dataFormatada = dataAtual.toISOString().replace(/[^0-9]/g, '');

        // Diretório para salvar as imagens
        const imagesDir = path.resolve(process.cwd(), 'public/images/hud');
        if (!fs.existsSync(imagesDir)) {
            fs.mkdirSync(imagesDir, { recursive: true });
        }

        // Nome e caminho do arquivo de imagem
        const imageName = `screenshot_${dataFormatada}.jpg`;
        const imagePath = path.resolve(imagesDir, imageName);

        // Converte a imagem usando Sharp, removendo o canal alfa
        const imageBuffer = await sharp(Buffer.from(screen.image), { raw: { width: screenWidth, height: screenHeight, channels: 4 } })
            .removeAlpha() // Remove o canal alfa
            .jpeg({ quality: 100 }) // Converte para JPEG
            .toBuffer(); // Converte para buffer

        // Salva o buffer da imagem no arquivo
        fs.writeFileSync(imagePath, imageBuffer);

        // console.log('Imagem salva em:', imagePath);

        return imagePath; // Retorna o caminho da imagem salva

    } catch (error) {
        console.error(error);
        throw new Error('Erro em gameplayHudPrintAndSave');
    }
}

module.exports = gameplayHudPrintAndSave;
