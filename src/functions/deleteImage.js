const fs = require('fs');

async function deleteImage(imagePath) {
    try {
        fs.unlinkSync(imagePath);
        // console.log(`Imagem deletada: ${imagePath}`);
    } catch (error) {
        // console.error(`Erro ao deletar imagem: ${error.message}`);
    }
}

module.exports = deleteImage;

