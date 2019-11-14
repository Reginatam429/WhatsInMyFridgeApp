//production dependencies
//const helmet = require('helmet') //helmet - secure HTTP headers in an Express app
//const compression = require('compression') //compression - compression middleware
//const rateLimit = require('express-rate-limit') //express-rate-limit - limit repeated requests to endpoints
//const { body, check } = require('express-validator') //express-validator - string validators and santizers

//original dependencies
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
const db = require("./queries");
const checkJwt = require("./checkJwt");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// mega: 
// define middleware to handle cors
if (process.env.NODE_ENV==="development"){
  app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Origin,Authorization,Content-Type"
  );
  next();
});
}

//production
//app.use(compression())
//app.use(helmet())

//main
app.get("/", (request, response) => {
  response.json({
    info:
      "Setting up your fridge systems in: Node.js, Express, and Postgres API"
  });
});

//external API call
// mega: 
// your db.getUser actually requires a parameter called id
// frontend sending a get request with no parameter will result an error
// for test: change this route to only send static message.
app.get("/api/external", checkJwt, db.getUsers);

//User table
app.get("/users/:id", db.getUser);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);
//Ingredient table
app.get("/users/:id/ingredients", db.getIngredient);
app.post("/users/:id/ingredients", db.createIngredient);
app.delete("/users/:user_id/ingredients/:id", db.deleteIngredient);
//favoritedRecipes table
app.get("/users/:id/recipes", db.getFavRecipe);
app.post("/users/:id/recipes", db.createFavRecipe);
app.put("/users/:id/recipes/:id", db.updateFavRecipe);

app.listen(process.env.PORT || port, () => {
  console.log(`Refridgerator is running on port ${port}.`);
});
