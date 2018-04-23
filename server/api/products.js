const express = require('express')
const axios = require('axios')

const router = express.Router()

router.get('/', async (req, res) => {
  const { data } = await axios.get('https://api.myjson.com/bins/v4plf')
  res.send({
    ...data,
    sum: 10,
  })
})

module.exports = router
