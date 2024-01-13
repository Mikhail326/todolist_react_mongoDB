const express = require('express')
const mongoose = require('mongoose')

require('dotenv')

const app = express()

const PORT = process.env.port || 5000

app.listen(PORT, () => console.log(`PORT: ${PORT}`))