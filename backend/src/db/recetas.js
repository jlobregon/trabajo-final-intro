const dbClient = require('./client.js');

async function getAllRecetas() {
    const result = await dbClient.query(
        `SELECT r.id, r.nombre, r.chef_id, r.descripcion, r.categoria, r.nivel_dificultad, r.tiempo_estimado, r.imagen_url,
        json_agg(
            json_build_object(
                'ingrediente_id', i.id,
                'nombre_ingrediente', i.nombre,
                'cantidad_ingredientes', ir.cantidad_ingredientes,
                'unidad_medida', i.unidad_medida 
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
    const result = await dbClient.query(
        `SELECT r.id, r.nombre, r.chef_id, r.descripcion, r.categoria, r.nivel_dificultad, r.tiempo_estimado, r.imagen_url,
        json_agg(
            json_build_object(
                'ingrediente_id', i.id,
                'nombre_ingrediente', i.nombre,
                'cantidad_ingredientes', ir.cantidad_ingredientes,
                'unidad_medida', i.unidad_medida 
            )
        ) AS ingredientes
        FROM recetas r
        JOIN ingredientes_recetas ir ON ir.receta_id = r.id
        JOIN ingredientes i ON i.id = ir.ingrediente_id
        WHERE r.id = $1
        GROUP BY r.id
        ORDER BY r.id`,
        [id]
    );
    return result.rows[0];
}

async function getRecetaByChefId(id) {
    const result = await dbClient.query('SELECT * FROM recetas WHERE chef_id = $1', [id]);
    return result.rows;
}

async function createReceta(receta) {
    const { nombre, chef_id, descripcion, nivel_dificultad, categoria, tiempo_estimado, imagen_url } = receta;
    const result = await dbClient.query(
        'INSERT INTO recetas (nombre, chef_id, descripcion, nivel_dificultad, categoria, tiempo_estimado, imagen_url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [nombre, chef_id, descripcion, nivel_dificultad, categoria, tiempo_estimado, imagen_url]
    );
    const ids_receta = [];
    const ids_ingrediente = [];
    const cantidades = [];
    receta.ingredientes.forEach(function (item) {
        ids_receta.push(result.rows[0].id);
        ids_ingrediente.push(item.id);
        cantidades.push(item.cantidad);
    });
    const ingredientes = await dbClient.query('INSERT INTO ingredientes_recetas (receta_id, ingrediente_id, cantidad_ingredientes) SELECT * FROM UNNEST ($1::int[], $2::int[], $3::int[]) RETURNING *',
        [ids_receta, ids_ingrediente, cantidades]
    );
    result.rows[0].ingredientes = ingredientes.rows.map(function (item) {
        return { ingrediente_id: item.ingrediente_id, cantidad_ingredientes: item.cantidad_ingredientes }
    });
    return result.rows[0];
}

async function updateReceta(id, receta) {
    let result = { rows: [] };

    let ingredientes = receta.ingredientes;
    receta.ingredientes = undefined;
    if (Object.keys(receta).filter(function (value) { return value.length > 0 }).length) {
        const entries = Object.entries(receta).filter(([_, value]) => value !== undefined);
        const columns = entries.map(([key], idx) => `${key} = $${idx + 1}`);
        const values = entries.map(([_, value]) => value);
        values.push(id);
        console.log(entries, columns, values);
        result = await dbClient.query(
            `UPDATE recetas SET ${columns.join(', ')} WHERE id = $${values.length} RETURNING *`,
            values
        );
    }

    if (ingredientes) {
        await dbClient.query('DELETE FROM ingredientes_recetas ir WHERE ir.receta_id = $1', [id]);
        const ids_receta = [];
        const ids_ingrediente = [];
        const cantidades = [];
        ingredientes.forEach(function (item) {
            ids_receta.push(id);
            ids_ingrediente.push(item.id);
            cantidades.push(item.cantidad);
        });
        ingredientes = await dbClient.query('INSERT INTO ingredientes_recetas (receta_id, ingrediente_id, cantidad_ingredientes) SELECT * FROM UNNEST ($1::int[], $2::int[], $3::int[]) RETURNING *',
            [ids_receta, ids_ingrediente, cantidades]
        );
        if (!result.rows || result.rows.length === 0)
        {
            const recetaResult = await dbClient.query('SELECT * FROM recetas WHERE id = $1', [id]);
            result.rows = recetaResult.rows;
        }
        result.rows[0].ingredientes = ingredientes.rows.map(function (item) {
            return { ingrediente_id: item.ingrediente_id, cantidad_ingredientes: item.cantidad_ingredientes }
        });
    }
    return result.rows[0];
}

async function deleteReceta(id) {
    const result = await dbClient.query('DELETE FROM recetas WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
}

module.exports = {
    getAllRecetas,
    getRecetaById,
    getRecetaByChefId,
    createReceta,
    updateReceta,
    deleteReceta
};
