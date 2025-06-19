module.exports = (err, req, res, next) => {
    console.error(err.stack);

    const payload = {
        message: err.message || 'An unexpected error occurred',
        code: err.code || 'INTERNAL_SERVER_ERROR',
        details: err.details || null
    };

    res.status(err.statusCode || 500).json(payload);
}