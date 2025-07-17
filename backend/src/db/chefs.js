const dbClient = require('./client.js');

async function getAllChefs() {
    const result = await dbClient.query('SELECT * FROM chefs');
    return result.rows;
}

async function getChefById(id) {
    const result = await dbClient.query('SELECT * FROM chefs WHERE id = $1', [id]);
    return result.rows[0];
}

async function createChef(chef) {
    const { nombre, acerca_de, especialidad, localidad, imagen_url } = chef;
    const result = await dbClient.query(
        'INSERT INTO chefs (nombre, acerca_de, especialidad, localidad, imagen_url) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [nombre, acerca_de, especialidad, localidad, imagen_url]
    );
    return result.rows[0];
}

async function updateChef(id, chef) {
    const { nombre, acerca_de, especialidad, localidad, imagen_url } = chef;
    const result = await dbClient.query(
        `UPDATE chefs SET nombre = $1, acerca_de = $2, especialidad = $3, localidad = $4, imagen_url = $5 WHERE id = $6 RETURNING *`,
        [nombre, acerca_de, especialidad, localidad, imagen_url, id]
    );
    return result.rows[0];
}

async function deleteChef(id) {
    const result = await dbClient.query('DELETE FROM chefs WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
}

module.exports = {
    getAllChefs,
    getChefById,
    createChef,
    updateChef,
    deleteChef
};
