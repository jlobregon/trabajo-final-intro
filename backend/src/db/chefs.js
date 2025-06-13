const dbClient = require('./client.js');

async function getAllChefs() {
    const result = await dbClient.query('SELECT * FROM recetas');
    return result.rows;
}

async function getChef(id) {
    const result = await dbClient.query('SELECT * FROM recetas WHERE id = $1', [id]);
    return result.rows[0];
}

module.exports = {
    getAllChefs,
    getChef
};
