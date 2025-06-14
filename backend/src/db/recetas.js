const dbClient = require('./client.js');

async function getAllRecetas() {
    try {
        const result = await dbClient.query('SELECT * FROM recetas');
        return result.rows;
    } catch (error) {
        console.error('Error al obtener recetas:', error);
        throw new Error('No se pudieron obtener las recetas');
    }
}

async function getRecetaById(id) {
    try {
        if (!id) {
            throw new TypeError('Falta el ID de la receta');
        }
        const result = await dbClient.query('SELECT * FROM recetas WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            throw new Error('Receta no encontrada');
        }
        return result.rows[0];
    } catch (error) {
        console.error('Error al obtener la receta:', error);
        throw new Error('No se pudo obtener la receta');
    }
}

module.exports = {
    getAllRecetas,
    getRecetaById
};
