const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Setting up your fridge systems in: Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
   console.log(`Refridgerator is running on port ${port}.`)
})