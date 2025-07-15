const { BadRequestError } = require('../errors');

function validateBody(schema) {
    return function (req, res, next) {
        const data = req.body;
        Object.keys(data).forEach(value => {
            if (!data[value]?.length)
            {
                data[value] = undefined;
            }
        })
        const { error } = schema.validate(data, { abortEarly: false });
        if (error) {
            const details = error.details.map(d => ({ field: d.path, msg: d.message }));
            return next(new BadRequestError('Datos inválidos', details));
        }
        next();
    };
}

// Solo acepta UN parámetro
function validateParam(schema, name) {
    return function (req, res, next) {
        const data = Object.values(req.params)[0];
        const { error } = schema.validate(data, { abortEarly: false });
        if (error) {
            const details = error.details.map(d => ({ field: name, msg: d.message.replace(`value`, name) }));
            return next(new BadRequestError('Datos inválidos', details));
        }
        next();
    };
}

module.exports = {
    validateBody,
    validateParam
};
