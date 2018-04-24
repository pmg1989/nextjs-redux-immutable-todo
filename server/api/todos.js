const express = require('express')
const axios = require('../utils/axiosServer')

const router = express.Router()

router.get('/', async (req, res) => {
  const { data } = await axios.get('/bins/aapid')
  res.send({
    list: data,
  })
})

module.exports = router
