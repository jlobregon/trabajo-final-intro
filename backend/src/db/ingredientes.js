const dbClient = require('./client.js');

async function getAllIngredientes() {
    try {
        const result = await dbClient.query('SELECT * FROM ingredientes');
        return result.rows;
    } catch (error) {
        console.error('Error al obtener ingredientes: ', error);
        throw new Error('No se pudieron obtener los ingredientes');
    }
}

async function getIngredienteById(id){
    try {
        const result = await dbClient.query('SELECT * FROM ingredientes WHERE id = $1', [id]);

        if(result.rowCount === 0){
            throw new Error('Ingrediente no encontrado');
        }

        return result.rows[0];
    } catch (error) {
        console.error('Error al obtener el ingrediente: ', error);
        throw new Error('No se pudo obtener el ingrediente');
    }
}

module.exports = {
    getAllIngredientes,
    getIngredienteById
};