const Joi = require('joi');

const idSchema = Joi.number().integer().required();
const idSchemaNotRequired = Joi.number().integer();

const recetaSchema = Joi.object({
    nombre: Joi.string().max(100),
    chef_id: idSchemaNotRequired,
    descripcion: Joi.string(),
    nivel_dificultad: Joi.number().min(1).max(3).integer(),
    categoria: Joi.string().max(50),
    tiempo_estimado: Joi.number().integer(),
    imagen_url: Joi.string(),
    ingredientes: Joi.array().items(Joi.object({ id: idSchema, cantidad: Joi.number().integer() }))
});

const recetaSchemaRequired = Joi.object({
    nombre: Joi.string().max(100).required(),
    chef_id: idSchema,
    descripcion: Joi.string(),
    nivel_dificultad: Joi.number().min(1).max(3).integer().required(),
    categoria: Joi.string().max(50).required(),
    tiempo_estimado: Joi.number().integer(),
    imagen_url: Joi.string(),
    ingredientes: Joi.array().items(Joi.object({ id: idSchema, cantidad: Joi.number().integer() })).required()
});

const ingredientesSchema = Joi.object({
    nombre: Joi.string().max(80),
    categoria: Joi.string().max(50),
    calorias_aprox: Joi.number().integer(),
    unidad_medida: Joi.string().max(30),
    es_vegano: Joi.bool()
});

const ingredientesSchemaRequired = Joi.object({
    nombre: Joi.string().max(80).required(),
    categoria: Joi.string().max(50),
    calorias_aprox: Joi.number().integer().required(),
    unidad_medida: Joi.string().max(30),
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
