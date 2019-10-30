const Pool = require('pg').Pool
const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: 5432,
})

  
  const getUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const createUser = (request, response) => {
    const { name, email } = request.body
  
    pool.query('INSERT INTO users (username, email, auth0_id) VALUES ($1, $2, $3)', [username, email, auth0_id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`New user added with ID: ${result.insertId}`)
    })
  }
  
  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { username, email } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [id, username, email, auth0_id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }
  
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

  const getIngredient = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM ingredients WHERE user_id = $1', [user_id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const createIngredient = (request, response) => {
    const {user_id, ingredient_name, category, added_date, expiration_date, amount } = request.body
  
    pool.query('INSERT INTO ingredients (user_id, ingredient_name, category, added_date, expiration_date, amount) VALUES ($1, $2, $3, $4, $5, $6)', [user_id, ingredient_name, category, added_date, expiration_date, amount], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`New ingredient added with ID: ${result.insertId}`)
    })
  }

  const deleteIngredient = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM ingredients WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Ingredient deleted with ID: ${id}`)
    })
  }

  const getFavRecipe = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM favoritedRecipes WHERE user_id = $1', [user_id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createFavRecipe = (request, response) => {
    const {user_id, recipe_name, unfavorited} = request.body
  
    pool.query('INSERT INTO ingredients (user_id, recipe_name, unfavorited) VALUES ($1, $2, $3)', [user_id, recipe_name, unfavorited], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`New favorited recipe added with ID: ${result.insertId}`)
    })
  }

  const updateFavRecipe = (request, response) => {
    const id = parseInt(request.params.id)
    const { user_id, recipe_name, unfavorited } = request.body
  
    pool.query(
      'UPDATE users SET user_id = $1, recipe_name = $2 WHERE unfavorited = $3',
      [user_id, recipe_name, unfavorited],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Recipe unfavorited with ID: ${id}`)
      }
    )
  }

  module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    getIngredient,
    createIngredient,
    deleteIngredient,
    getFavRecipe,
    createFavRecipe,
    updateFavRecipe
  }