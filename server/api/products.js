const express = require('express')
const axios = require('../utils/axiosServer')

const router = express.Router()

router.get('/', async (req, res) => {
  const { data } = await axios.get('/bins/v4plf')
  res.send({
    ...data,
    sum: 10,
  })
})

module.exports = router
