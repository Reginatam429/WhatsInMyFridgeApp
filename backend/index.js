const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Setting up your fridge systems in: Node.js, Express, and Postgres API' })
})

app.get('/users/:id', db.getUser)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.get('/users/:id/ingredients', db.getIngredient)
app.post('/users/:id/ingredients', db.createIngredient)
app.delete('/users/:user_id/ingredients/:id', db.deleteIngredient)

app.get('/users/:id/recipes', db.getFavRecipe)
app.post('/users/:id/recipes', db.createFavRecipe)
app.put('/users/:id/recipes/:id', db.updateFavRecipe)

app.listen(port, () => {
    console.log(`Refridgerator is running on port ${port}.`)
 })