class NotFoundError extends Error {
  constructor(message = 'Resource not found', details = '') {
    super(message);
    this.code = 'NOT_FOUND';
    this.statusCode = 404;
    this.details = details;
  }
}

class BadRequestError extends Error {
  constructor(message = 'Bad request', details = '') {
    super(message);
    this.code = 'BAD_REQUEST';
    this.statusCode = 400;
    this.details = details;
  }
}

module.exports = {
    NotFoundError,
    BadRequestError
};