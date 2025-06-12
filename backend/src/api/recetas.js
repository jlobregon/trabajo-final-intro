const express = require('express');
const router = express.Router();
const { getAllRecetas } = require('../db/recetas');

router.get('/', async function (req, res) {
    const result = await getAllRecetas();
    res.json(result);
});

module.exports = router;
