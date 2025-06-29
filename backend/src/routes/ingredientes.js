const express = require('express');
const router = express.Router();
const { getAllIngredientes, getIngredienteById, createIngrediente, deleteIngrediente, updateIngrediente } = require('../db/ingredientes');
const { NotFoundError, BadRequestError } = require('../errors.js');
const { validateBody, validateParam} = require('../middleware/validate.js');

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

router.delete('/:id', async function (req, res){
    const result = await deleteIngrediente(req.params.id);
    res.json(result);
});

router.put('/:id', async function (req, res){
    const ingrediente = req.body;
    const result = await updateIngrediente(req.params.id, ingrediente);
    res.json(result);
});

module.exports = router;