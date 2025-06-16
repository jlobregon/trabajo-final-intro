const dbClient = require('./client.js');

async function getAllRecetas() {
    const result = await dbClient.query('SELECT * FROM recetas');
    return result.rows;
}

module.exports = {
    getAllRecetas
};
