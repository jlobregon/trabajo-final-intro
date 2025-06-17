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
        if(!id){
            throw new Error('No se encuentra el Id del ingrediente');
        }
        const result = await dbClient.query('SELECT * FROM ingredientes WHERE id = $1', [id]);

        if(result.rows.length === 0){
            throw new Error('Ingrediente no encontrado');
        }

        return result.rows[0];
    } catch (error) {
        console.error('Error al obtener el ingrediente: ', error);
        throw new Error('No se pudo obtener el ingrediente');
    }
}

async function createIngrediente(ingrediente){
    try {
        const { nombre, categoria, calorias_aprox, unidad_medida, es_vegano } = ingrediente;

        const result = await dbClient.query(
            'INSERT INTO ingredientes (nombre, categoria, calorias_aprox, unidad_medida, es_vegano) VALUES ($1, $2, $3. $4, $5) RETURNING *',
            [nombre, categoria, calorias_aprox, unidad_medida, es_vegano]
        );

        return result.rows[0];
    } catch (error) {
        console.error('Error creando el ingrediente: ', error);
        throw new Error('No se pudo crear el ingrediente');
    }
}   

module.exports = {
    getAllIngredientes,
    getIngredienteById,
    createIngrediente
};