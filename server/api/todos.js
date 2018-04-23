const express = require('express')
const axios = require('axios')

const router = express.Router()

router.get('/', async (req, res) => {
  const { data } = await axios.get('https://api.myjson.com/bins/aapid')
  res.send({
    list: data,
  })
})

module.exports = router
