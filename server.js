'use strict'

const express = require('express')
const app = express()

app.use(express.static('./'))

app.listen(process.env.PORT, () => {
  console.log('Server running')
})