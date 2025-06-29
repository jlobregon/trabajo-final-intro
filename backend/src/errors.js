class InternalError extends Error {
  constructor(message = 'An internal error occurred', details = '') {
    super(message);
    this.code = 'INTERNAL_ERROR';
    this.statusCode = 500;
    this.details = details;
  }
}

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

class ValidationError extends Error {
  constructor(message = 'Validation error', details = '') {
    super(message);
    this.code = 'VALIDATION_ERROR';
    this.statusCode = 422;
    this.details = details;
  }
}

module.exports = {
    InternalError,
    NotFoundError,
    BadRequestError,
    ValidationError
};