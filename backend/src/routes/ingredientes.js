const express = require('express');
const router = express.Router();
const { getAllIngredientes, getIngredienteById, createIngrediente } = require('../db/ingredientes');

router.get('/', async function (req, res) {
        const result = await getAllIngredientes();
        res.json(result);
});

router.get('/:id', async function (req, res) {
    const result = await getIngredienteById(req.params.id);
    res.json(result);
});

router.post('/', async function (req, res){
    const ingrediente = req.body;
    const result = await createIngrediente(ingrediente);
    res.json(result);
});

module.exports = router;