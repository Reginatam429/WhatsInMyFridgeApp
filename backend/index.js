//production dependencies
// const helmet = require('helmet') //helmet - secure HTTP headers in an Express app
// const compression = require('compression') //compression - compression middleware
//const rateLimit = require('express-rate-limit') //express-rate-limit - limit repeated requests to endpoints
//const { body, check } = require('express-validator') //express-validator - string validators and santizers

//original dependencies
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')
const path = require('path')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

//production 
// app.use(compression())
// app.use(helmet())

if (process.env.NODE_ENV === 'production') {
    //Static file declaration
    app.use(express.static(path.join(__dirname, '../client/build')));
    //build mode 
    app.get('*', (req, res) => { res.sendfile(path.join(__dirname = '../client/build/index.html')); })
  }

//main
app.get('/', (request, response) => {
    response.json({ info: 'Setting up your fridge systems in: Node.js, Express, and Postgres API' })
})
//User table
app.get('/users/:id', db.getUser)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
//Ingredient table
app.get('/users/:id/ingredients', db.getIngredient)
app.post('/users/:id/ingredients', db.createIngredient)
app.delete('/users/:user_id/ingredients/:id', db.deleteIngredient)
//favoritedRecipes table
app.get('/users/:id/recipes', db.getFavRecipe)
app.post('/users/:id/recipes', db.createFavRecipe)
app.put('/users/:id/recipes/:id', db.updateFavRecipe)

app.listen(process.env.PORT || port, () => {
    console.log(`Refridgerator is running on port ${port}.`)
 })