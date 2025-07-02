const express = require('express');
const router = express.Router();
const { getAllIngredientes, getIngredienteById, createIngrediente, deleteIngrediente, updateIngrediente } = require('../db/ingredientes');
const { NotFoundError, BadRequestError } = require('../errors.js');
const { validateBody, validateParam} = require('../middleware/validate.js');
const { idSchema, ingredientesSchema, ingredientesSchemaRequired } = require('../schemas.js');

router.get('/', async function (req, res) {
    const result = await getAllIngredientes();
    if (!result || result.length === 0) throw new NotFoundError('No hay ingredientes disponibles', 'La lista de ingredientes está vacía.');
    res.json(result);
});

router.get('/:id', validateParam(idSchema, 'id'), async function (req, res) {
    const { id } = req.params;
    const result = await getIngredienteById(id);
    if (!result) throw new NotFoundError('Ingrediente no encontrado', `El ingrediente con id ${id} no existe.`);
    res.json(result);
});

router.post('/', validateBody(ingredientesSchemaRequired), async function (req, res) {
    const ingrediente = req.body;
    const result = await createIngrediente(ingrediente);
    res.status(201).json(result);
});

router.patch('/:id', validateParam(idSchema, 'id'), validateBody(ingredientesSchema), async function (req, res) {
    const { id } = req.params;
    const ingrediente = req.body;
    const result = await updateIngrediente(id, ingrediente);
    if (!result) throw new NotFoundError('Ingrediente no encontrado', `No se pudo actualizar el ingrediente con id ${id}.`);
    res.json(result);
});

router.delete('/:id', validateParam(idSchema, 'id'), async function (req, res) {
    const { id } = req.params;
    const result = await deleteIngrediente(id);
    if (!result) throw new NotFoundError('Ingrediente no encontrado', `No se pudo eliminar el ingrediente con id ${id}.`);
    res.json(result);
});

module.exports = router;