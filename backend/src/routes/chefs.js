const express = require('express');
const router = express.Router();
const { getAllChefs, getChefById, createChef, updateChef, deleteChef } = require('../db/chefs');
const { NotFoundError, BadRequestError } = require('../errors.js');
const { validateBody, validateParam} = require('../middleware/validate.js');
const { idSchema, chefsSchema, chefsSchemaRequired } = require('../schemas.js');
