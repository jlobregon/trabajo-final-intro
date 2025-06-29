const dbClient = require('./client.js');

async function getAllIngredientes() {
    const result = await dbClient.query('SELECT * FROM ingredientes');
    return result.rows;
}

async function getIngredienteById(id){
    const result = await dbClient.query('SELECT * FROM ingredientes WHERE id = $1', [id]);
    return result.rows[0];
}

async function createIngrediente(ingrediente){
    const { nombre, categoria, calorias_aprox, unidad_medida, es_vegano } = ingrediente;
    const result = await dbClient.query(
        'INSERT INTO ingredientes (nombre, categoria, calorias_aprox, unidad_medida, es_vegano) VALUES ($1, $2, $3. $4, $5) RETURNING *',
        [nombre, categoria, calorias_aprox, unidad_medida, es_vegano]
    );
    return result.rows[0];
}

async function updateIngrediente(id, ingrediente){
    const entries = Object.entries(ingrediente).filter(([_, value]) => value !== undefined);
    const columns = entries.map(([key], idx) => `${key} = $${idx + 1}`);
    const values = entries.map(([_, value]) => value);
    values.push(id);
    const result = await dbClient.query(
        `UPDATE ingredientes SET ${columns.join(', ')} WHERE id = $${values.length} RETURNING *`,
        values
    );
    return result.rows[0];
}

async function deleteIngrediente(id){
    const result = await dbClient.query('DELETE FROM ingredientes WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
}
module.exports = {
    getAllIngredientes,
    getIngredienteById,
    createIngrediente,
    deleteIngrediente,
    updateIngrediente
};