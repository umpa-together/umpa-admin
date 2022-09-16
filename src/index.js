import express from 'express'
import './utils/env.js'
import './utils/schedule.js'

const app = express()

app.use(express.json())

app.listen(process.env.SERVER_PORT, () => {
    console.log(`admin server start on port ${process.env.SERVER_PORT}`)
})