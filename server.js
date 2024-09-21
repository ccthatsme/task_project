const express = require('express')
const app = express()
const port = 3000
const errorHandler = require('./custommiddleware/errorhandler');

const testRoute = require('./controllers/testing')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json()) 
app.use('/testing', testRoute);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})