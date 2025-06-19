const dbClient = require('./client.js');

async function getAllRecetas() {
    const result = await dbClient.query('SELECT * FROM recetas');
    return result.rows;
}

async function getRecetaById(id) {
    const result = await dbClient.query('SELECT * FROM recetas WHERE id = $1', [id]);
    return result.rows[0];
}

async function createReceta(receta) {
    const { nombre, chef_id, descripcion, nivel_dificultad, categoria, tiempo_estimado, imagen_url } = receta;
    const result = await dbClient.query(
        'INSERT INTO recetas (nombre, chef_id, descripcion, nivel_dificultad, categoria, tiempo_estimado, imagen_url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [nombre, chef_id, descripcion, nivel_dificultad, categoria, tiempo_estimado, imagen_url]
    );
    return result.rows[0];
}

async function updateReceta(id, receta) {
    const entries = Object.entries(receta).filter(([_, value]) => value !== undefined);
    const columns = entries.map(([key], idx) => `${key} = $${idx + 1}`);
    const values = entries.map(([_, value]) => value);
    values.push(id);
    const result = await dbClient.query(
        `UPDATE recetas SET ${columns.join(', ')} WHERE id = $${values.length} RETURNING *`,
        values
    );
    return result.rows[0];
}

async function deleteReceta(id) {
    try {
        if (!id) {
            throw new Error('Falta el ID de la receta');
        }
        const result = await dbClient.query('DELETE FROM recetas WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            throw new Error('Receta no encontrada');
        }
        return result.rows[0];
    } catch (error) {
        console.error('Error al eliminar la receta:', error);
        throw new Error('No se pudo eliminar la receta');
    }
}

module.exports = {
    getAllRecetas,
    getRecetaById,
    createReceta,
    updateReceta,
    deleteReceta
};
