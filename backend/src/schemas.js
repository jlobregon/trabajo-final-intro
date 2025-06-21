const Joi = require('joi');

const idSchema = Joi.number().integer().required();
const idSchemaNotRequired = Joi.number().integer();

const recetaSchema = Joi.object({
    nombre: Joi.string().max(100),
    chef_id: idSchemaNotRequired,
    description: Joi.string(),
    nivel_dificultad: Joi.number().integer(),
    categoria: Joi.string().max(50),
    tiempo_estimado: Joi.number().integer(),
    imagen_url: Joi.string()
});

const recetaSchemaRequired = Joi.object({
    nombre: Joi.string().max(100).required(),
    chef_id: idSchema,
    description: Joi.string(),
    nivel_dificultad: Joi.number().integer().required(),
    categoria: Joi.string().max(50).required(),
    tiempo_estimado: Joi.number().integer(),
    imagen_url: Joi.string()
});

module.exports = {
    idSchema,
    recetaSchema,
    recetaSchemaRequired
}