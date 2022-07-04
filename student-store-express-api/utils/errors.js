class ExpressError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

class BadRequestError extends ExpressError {
  constructor(message) {
    super();
    this.message = message || "Bad Request";
    this.status = 400;
  }
}

class NotFoundError extends ExpressError {
  constructor(message) {
    super();
    this.message = message || "Not found";
    this.status = 404;
  }
}

exports.BadRequestError = BadRequestError;
exports.NotFoundError = NotFoundError;
exports.ExpressError = ExpressError;
