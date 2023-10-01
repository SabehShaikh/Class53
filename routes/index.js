import express from 'express'
import user from './user.js'
import product from './product.js'
import upload from './upload.js'

const router = express.Router();

router.use('/user', user)
router.use('/product', product)
router.use('/upload', upload)

export default router;