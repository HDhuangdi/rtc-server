
import express from "express"
import fs from 'fs'
const resolve = path => fs.resolve(__dirname, path)

const app = express()
const port = 3001
app.use(express.static('./static'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
