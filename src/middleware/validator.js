const { body, param, query, validationResult } = require('express-validator');

/* ── Run validation and return errors ── */
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: 'Validation failed.',
      errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
    });
  }
  next();
};

/* ── Auth validators ── */
const registerRules = [
  body('name').trim().notEmpty().withMessage('Name is required.').isLength({ min: 2, max: 60 }),
  body('email').trim().isEmail().withMessage('Valid email is required.').normalizeEmail(),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters.')
    .matches(/\d/)
    .withMessage('Password must contain at least one number.'),
  body('role').optional().isIn(['admin', 'user']).withMessage('Role must be admin or user.'),
];

const loginRules = [
  body('email').trim().isEmail().withMessage('Valid email is required.').normalizeEmail(),
  body('password').notEmpty().withMessage('Password is required.'),
];

/* ── Intern validators ── */
const internRules = [
  body('name').trim().notEmpty().withMessage('Name is required.').isLength({ min: 2, max: 80 }),
  body('email').trim().isEmail().withMessage('Valid email is required.').normalizeEmail(),
  body('department').trim().notEmpty().withMessage('Department is required.'),
  body('skills').optional().isArray().withMessage('Skills must be an array.'),
  body('startDate').optional().isISO8601().withMessage('startDate must be a valid date (YYYY-MM-DD).'),
  body('status')
    .optional()
    .isIn(['active', 'inactive', 'completed'])
    .withMessage('Status must be active, inactive, or completed.'),
];

const updateInternRules = [
  body('name').optional().trim().isLength({ min: 2, max: 80 }),
  body('email').optional().trim().isEmail().normalizeEmail(),
  body('department').optional().trim().notEmpty(),
  body('skills').optional().isArray(),
  body('startDate').optional().isISO8601(),
  body('status').optional().isIn(['active', 'inactive', 'completed']),
];

const idParamRule = [
  param('id').isInt({ min: 1 }).withMessage('ID must be a positive integer.'),
];

const paginationRules = [
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer.'),
  query('limit').optional().isInt({ min: 1, max: 100 }).withMessage('Limit must be between 1–100.'),
];

module.exports = {
  validate,
  registerRules,
  loginRules,
  internRules,
  updateInternRules,
  idParamRule,
  paginationRules,
};
