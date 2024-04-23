const express = require('express')
const app = express()
const port = 3000

const testRoute = require('./controllers/testing')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/testing', testRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})