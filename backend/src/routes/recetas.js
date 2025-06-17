const express = require('express');
const router = express.Router();
const { getAllRecetas, getRecetaById, createReceta } = require('../db/recetas');

router.get('/', async function (req, res) {
    try {
        const result = await getAllRecetas();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.get('/:id', async function (req, res) {
    const { id } = req.params;
    try {
        if (isNaN(id)) {
            const error = new TypeError('El ID no es un número');
            error.cause = 'id';
            throw error;
        }
        const result = await getRecetaById(id);
        res.json(result);
    } catch (error) {
        console.error('Error al procesar la petición:', error);
        if (error instanceof TypeError)
        {
            return res.status(400).json({ error: `Hubo un error de tipo de dato con: ${error.cause}` });
        }
        res.status(404).json({ error: 'Receta no encontrada' });
    }
});

router.post('/', async function (req, res) {
    const receta = req.body;
    try {
        const result = await createReceta(receta);
        res.status(201).json(result);
    } catch (error) {
        console.error('Error al crear la receta:', error);
        res.status(400).json({ error: 'Error al crear la receta' });
    }
});

module.exports = router;
