const express = require('express');
const router = express.Router();
const { getAllIngredientes, getIngredienteById } = require('../db/ingredientes');

router.get('/', async function (req, res) {
        const result = await getAllIngredientes();
        res.json(result);
});

router.get('/:id', async function (req, res) {
    const result = await getIngredienteById(req.params.id);
    res.json(result);
});

module.exports = router;