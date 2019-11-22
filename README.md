# WhatsInMyFridgeApp
![](/readmeAssets/logo.png)
# Overview

What's In My Fridge is an application that allows users to save money by using their fridge ingredients to find delicious recipes and prevent food waste!

> https://whatsinmyfridgeapp.herokuapp.com/

## Techstack

Languages
- HTML
- CSS
- JavaScript

Frameworks
- React.js
- Express.js
- Node.js

## Installation
To install this app, please install the project dependencies and run it locally. What's In My Fridge is currently hosted on: 
> [Heroku](https://whats-in-myfridge.herokuapp.com/).

1. clone the repo
2. Run a terminal and cd into folder Client
    -npm start
    -Go to localhost/3000 to start the frontend of the app
3. Run a second terminal and cd into folder backend
    -npm start
    -go to localhost/5000 to start the backend of the app

## Wireframes and User Stories

More information and details can be found on: 
> [Trello](https://trello.com/b/t4oVJpvk/whats-in-my-fridge-app).


Data Model:

![Data Model](/readmeAssets/datamodel.png)

User Flow:

![User Flow](/readmeAssets/userflow.png)


## Difficulties/Unsolved Problems
-the orignal recipe API the app utilized was shut down in November 2019 and had to be replaced by the Edamam API.
-The heroku version of the app is not as functional as the local version.
-the ingredient list is hard coded to take in only user 4's list as the user id is not passed down to the components.

##Future Development

-Build out favoriting system for recipes.
-Add a feature allowing users to select ingredients from their ingredient list to the search bar.
-When a user adds an ingredient to their fridge, they will be able to add an expiration date which will allow the app to track when ingredients are about to expire.
-Users should be able to edit their ingredients.
-Users have the option to add friends/other users and share fridge information if they wish to.
-Users could add a photo for their profile.
