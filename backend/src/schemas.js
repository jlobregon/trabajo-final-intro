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

const ingredientesSchema = Joi.object({
    nombre: Joi.string().max(80),
    categoria: Joi.string().max(50),
    calorias_aprox: Joi.number().integer(),
    unidad_medida: Joi.string().max(3),
    es_vegano: Joi.bool()
});

const ingredientesSchemaRequired = Joi.object({
    nombre: Joi.string().max(80).required(),
    categoria: Joi.string().max(50),
    calorias_aprox: Joi.number().integer().required(),
    unidad_medida: Joi.string().max(3),
    es_vegano: Joi.bool().required()
});

const chefsSchema = Joi.object({
    nombre: Joi.string().max(80),
    acerca_de: Joi.string().max(200),
    especialidad: Joi.string().max(50),
    localidad: Joi.string().max(50),
    imagen_url: Joi.string()
});

const chefsSchemaRequired = Joi.object({
    nombre: Joi.string().max(80).required(),
    acerca_de: Joi.string().max(200),
    especialidad: Joi.string().max(50),
    localidad: Joi.string().max(50).required(),
    imagen_url: Joi.string()
});

module.exports = {
    idSchema,
    recetaSchema,
    recetaSchemaRequired,
    ingredientesSchema,
    ingredientesSchemaRequired,
    chefsSchema,
    chefsSchemaRequired
}
