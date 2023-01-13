import { body, param } from 'express-validator'
import { validationExpressResult } from '../middlewares/validationExpressResult.js'

export const findSearchValidator =   [
  param('lat', 'Invalid search params')
    .trim()
    .notEmpty(),
  param('lng', 'Invalid search params')
    .trim()
    .notEmpty(),
  validationExpressResult,
]

export const createCommerceValidator = [
  body('name', 'Invalid search params')
    .trim()
    .notEmpty(),
  body('description', 'Invalid search params')
    .trim()
    .notEmpty(),
  body('location', 'Invalid search params')
    .notEmpty(),
  body('category', 'Invalid search params').isIn(['COFFE', 'PUB']),
  validationExpressResult
]

export const createRatingValidator = [
  body('commerceId', 'Invalid search params')
    .trim()
    .notEmpty()
    .isMongoId(),
  body('rating', 'the value must be between 0 and 5')
    .trim()
    .notEmpty()
    .isInt({ min: 0, max: 5 }),
  validationExpressResult
]

export const getCommerceValidator = [
  param('commerceId', 'Invalid search params')
    .trim()
    .notEmpty()
    .isMongoId(),
  validationExpressResult
]

export const getIdCommerceValidator = [
  param('id', 'Invalid search params')
    .trim()
    .notEmpty()
    .isMongoId(),
  validationExpressResult
]