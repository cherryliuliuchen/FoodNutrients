# Technical Project Description for FoodNutrients APP
[![Node.js Version](https://img.shields.io/badge/node.js-14%2B-brightgreen.svg)](https://nodejs.org/)

> The food nutrition analysis application  is a web-based tool designed to provide users with detailed nutrition information and advice on healthy eating. It is built using Node.js with Express as the backend frameworkd and integrates with the [USDA API](https://api.nal.usda.gov/) for food nutrition data. The frontend is developed by React.

> The application comprises several key modules, each serving a specific purpose for users. These modules include food search, user registration/login and user-selected foodlist. 

## Table of Contents
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [API Document](./Food.collectionAPI.md)
- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)

## Features
The application comprises several key modules, each serving a specific purpose for users. These modules include food search, user-selected foodlist, and user registration/login. 

## API Endpoints
### 1. Authentication & User Management

| Method | Endpoint                                  | Description                                            |
|--------|-------------------------------------------|--------------------------------------------------------|
| POST   | /api/user/register                        | Registers a new user with name, email, and password.   |
| POST   | /api/user/login                           | Authenticates a user and provides a login token.       |
| GET    | /api/user/validate-token                  | Validates the login token for a user.                  |
| PUT    | /api/user/admin/{email}                   | Modifies a user account by the admin using the email.  |
| POST   | /api/user/admin                           | Creates a new user account by the admin.               |

### 2. Food Data

| Method | Endpoint                                  | Description                                            |
|--------|-------------------------------------------|--------------------------------------------------------|
| GET    | /api/food/search?query={search}           | Retrieves a list of foods based on the search query.   |
| POST   | /api/food/{fdcId}                         | Retrieves specific food nutrition details by `fdcId`.  |

### 3. MyFood Management

| Method | Endpoint                                  | Description                                            |
|--------|-------------------------------------------|--------------------------------------------------------|
| GET    | /api/myfood                               | Retrieves the logged-in user's saved food items.       |
| POST   | /api/myfood                               | Saves a new food item to the logged-in user's list.    |
| DELETE | /api/myfood/{foodId}                      | Deletes a food item from the logged-in user's list.    |

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/cherryliuliuchen/usdaFoodnutrition.git
   ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Create a .env file in the root directory and configure the environment variables:
    ```bash
    PORT=3000
    DATABASE_URL=your-database-url
    JWT_SECRET=your-jwt-secret
    ```

2. Start the server:
    ``` bash
    npm start
    ```
    The server will run on http://localhost:3000.

3. For development, you can use:
    ```bash
    npm run dev
    ```

## Contact
If you have any questions or feedback, feel free to contact me:

> Email: cherryliuliuchen@gmail.com