const logger = require('../utils/logger');

/* ── 404 Handler ── */
const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
};

/* ── Global Error Handler ── */
const errorHandler = (err, req, res, next) => {
  logger.error(err.message, {
    stack: err.stack,
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
  });

  const statusCode = err.statusCode || 500;
  const message    = err.isOperational ? err.message : 'Internal server error.';

  res.status(statusCode).json({ success: false, message });
};

/* ── Custom Error Class ── */
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode   = statusCode;
    this.isOperational = true;
  }
}

module.exports = { notFound, errorHandler, AppError };
