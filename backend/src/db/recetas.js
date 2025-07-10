const dbClient = require('./client.js');

async function getAllRecetas() {
    const result = await dbClient.query(`SELECT r.id, r.nombre, r.descripcion, r.categoria, r.nivel_dificultad, r.tiempo_estimado, r.imagen_url,
                                        json_agg(
                                            json_build_object(
                                            'ingrediente_id', i.id,
                                            'nombre_ingrediente', i.nombre,
                                            'cantidad_ingredientes', ir.cantidad_ingredientes
                                            )
                                        ) AS ingredientes
                                        FROM recetas r
                                        JOIN ingredientes_recetas ir ON ir.receta_id = r.id
                                        JOIN ingredientes i ON i.id = ir.ingrediente_id
                                        GROUP BY r.id
                                        ORDER BY r.id`
);
    return result.rows;
}

async function getRecetaById(id) {
    const result = await dbClient.query(`SELECT r.id, r.nombre, r.descripcion, r.categoria, r.nivel_dificultad, r.tiempo_estimado, r.imagen_url,
                                        json_agg(
                                            json_build_object(
                                            'ingrediente_id', i.id,
                                            'nombre_ingrediente', i.nombre,
                                            'cantidad_ingredientes', ir.cantidad_ingredientes
                                            )
                                        ) AS ingredientes
                                        FROM recetas r
                                        JOIN ingredientes_recetas ir ON ir.receta_id = r.id
                                        JOIN ingredientes i ON i.id = ir.ingrediente_id
                                        WHERE r.id = $1
                                        GROUP BY r.id
                                        ORDER BY r.id`,
         [id]);
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
    const result = await dbClient.query('DELETE FROM recetas WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
}

module.exports = {
    getAllRecetas,
    getRecetaById,
    createReceta,
    updateReceta,
    deleteReceta
};
