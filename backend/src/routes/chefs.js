const express = require('express');
const router = express.Router();
const { getAllChefs, getChefById, createChef, updateChef, deleteChef } = require('../db/chefs');
const { NotFoundError, BadRequestError } = require('../errors.js');
const { validateBody, validateParam} = require('../middleware/validate.js');
const { idSchema, chefsSchema, chefsSchemaRequired } = require('../schemas.js');

router.get('/', async function (req, res) {
    const result = await getAllChefs();
    if (!result || result.length === 0) throw new NotFoundError('No hay chefs disponibles', 'La lista de chefs está vacía.');
    res.json(result);
});

router.get('/:id', validateParam(idSchema, 'id'), async function (req, res) {
    const { id } = req.params;
    const result = await getChefById(id);
    if (!result) throw new NotFoundError('Chef no encontrado', `El chef con id ${id} no existe.`);
    res.json(result);
});

router.post('/', validateBody(chefsSchemaRequired), async function (req, res) {
    const chef = req.body;
    const result = await createChef(chef);
    res.status(201).json(result);
});

router.patch('/:id', validateParam(idSchema, 'id'), validateBody(chefsSchema), async function (req, res) {
    const { id } = req.params;
    const chef = req.body;
    const result = await updateChef(id, chef);
    if (!result) throw new NotFoundError('Chef no encontrado', `No se pudo actualizar el chef con id ${id}.`);
    res.json(result);
});

router.delete('/:id', validateParam(idSchema, 'id'), async function (req, res) {
    const { id } = req.params;
    const result = await deleteChef(id);
    if (!result) throw new NotFoundError('Chef no encontrado', `No se pudo eliminar el chef con id ${id}.`);
    res.json(result);
});

module.exports = router;
