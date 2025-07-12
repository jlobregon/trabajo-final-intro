const express = require('express');
const router = express.Router();
const { getAllRecetas, getRecetaById, getRecetaByChefId, createReceta, updateReceta, deleteReceta } = require('../db/recetas');
const { NotFoundError, BadRequestError } = require('../errors.js');
const { validateBody, validateParam} = require('../middleware/validate.js');
const { idSchema, recetaSchema, recetaSchemaRequired } = require('../schemas.js');

router.get('/', async function (req, res) {
    const result = await getAllRecetas();
    if (!result || result.length === 0) throw new NotFoundError('No hay recetas disponibles', 'La lista de recetas está vacía.');
    res.json(result);
});

router.get('/:id', validateParam(idSchema, 'id'), async function (req, res) {
    const { id } = req.params;
    const result = await getRecetaById(id);
    if (!result) throw new NotFoundError('Receta no encontrada', `La receta con id ${id} no existe.`);
    res.json(result);
});

router.get('/chefs/:id', validateParam(idSchema, 'id'), async function (req, res) {
    const { id } = req.params;
    const result = await getRecetaByChefId(id);
    if (!result) throw new NotFoundError('Receta no encontrada', `La receta con id ${id} no existe.`);
    res.json(result);
});

router.post('/', validateBody(recetaSchemaRequired), async function (req, res) {
    const receta = req.body;
    const result = await createReceta(receta);
    res.status(201).json(result);
});

router.patch('/:id', validateParam(idSchema, 'id'), validateBody(recetaSchema), async function (req, res) {
    const { id } = req.params;
    const receta = req.body;
    const result = await updateReceta(id, receta);
    if (!result) throw new NotFoundError('Receta no encontrada', `No se pudo actualizar la receta con id ${id}.`);
    res.json(result);
});

router.delete('/:id', validateParam(idSchema, 'id'), async function (req, res) {
    const { id } = req.params;
    const result = await deleteReceta(id);
    if (!result) throw new NotFoundError('Receta no encontrada', `No se pudo eliminar la receta con id ${id}.`);
    res.json(result);
});

module.exports = router;
