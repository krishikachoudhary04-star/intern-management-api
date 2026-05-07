const { createLogger, format, transports } = require('winston');
const path = require('path');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.json()
  ),
  transports: [
    // Console output (colorized for dev)
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] ${level}: ${message}${metaStr}`;
        })
      )
    }),
    // File: all logs
    new transports.File({
      filename: path.join(__dirname, '../../logs/app.log'),
      maxsize: 5 * 1024 * 1024, // 5MB
      maxFiles: 3
    }),
    // File: errors only
    new transports.File({
      filename: path.join(__dirname, '../../logs/error.log'),
      level: 'error',
      maxsize: 5 * 1024 * 1024,
      maxFiles: 3
    })
  ]
});

module.exports = logger;
