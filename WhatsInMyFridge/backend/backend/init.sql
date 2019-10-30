CREATE TABLE users (
	id BIGSERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  auth0_id VARCHAR UNIQUE NOT NULL
);

INSERT INTO users(username,email,auth0_id) VALUES ('test','test@test.com','testAuthid'),('testdelete','test@delete.com','testdeleteid'),('Pikachu','pika@pkmn.com','pikaauth123');


CREATE TABLE ingredients (
	id BIGSERIAL NOT NULL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES 			    
  			users(id) ON DELETE SET NULL,
  ingredient_name VARCHAR(50) NOT NULL,
  category VARCHAR(50) NOT NULL,
  added_date DATE,
  expiration_date DATE,
  amount VARCHAR(50) NOT NULL
);

INSERT INTO ingredients (user_id,ingredient_name,category,added_date,expiration_date,amount) VALUES ('1','carrot','vegetable','2019-10-28','2019-11-20','4'),('2','apple','fruit','2019-10-31','2019-11-16','2'),('3','milk','dairy','2019-10-29','2019-11-10','1 gallon'),('1','broccoli','vegetable','2019-10-25','2019-11-08','1'),('2','heavy cream','dairy','2019-10-28','2019-11-10','1');

CREATE TABLE favoritedRecipes (
	id BIGSERIAL NOT NULL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES 			    
  			users(id) ON DELETE SET NULL,
  recipe_name VARCHAR(50) NOT NULL,
  unfavorited BOOLEAN NOT NULL
);

INSERT INTO favoritedRecipes(user_id,recipe_name,unfavorited) VALUES ('1','omlette test','false'),('2','porridge','false'),('2','chicken pot pie','true'),('3','apple pie','false');