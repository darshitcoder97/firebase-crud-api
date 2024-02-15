const router = require('express').Router();
const student = require('./student')

router.use('/',student)

module.exports = router