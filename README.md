# Currency Counter / Budget Calculator

## Desktop View
![Screenshot 2021-02-02 at 17 34 37](https://user-images.githubusercontent.com/70659641/106639627-11ddd480-657d-11eb-80f1-be8618044e72.png)
## Mobile View
![Screenshot 2021-02-02 at 17 35 33](https://user-images.githubusercontent.com/70659641/106639633-130f0180-657d-11eb-9a96-2566fe382667.png)

## Details

This is a full-stack project that acts a a budget calculator. The user can add and delete both income and expenditure and it will automatically update the total amount.

## Built With
- Figma
- React
- JSX
- JavaScript
- HTML
- CSS
- css.module
- framer motion
- uuid
- Node.js
- Express
- PostgreSQL
- Cors
- dotenv

### Design
Initial designs for application were created with Figma to give a clear goal of aesthetics and functionality of the app.
### Frontend
The frontend was created with the framework React, utilising hooks, more specifically useReducer and context api to pass functionality to components without prop drilling. CSS was isolated with module.css and the application has been designed with responsiveness in mind, using media queries to create the Progressive Web App. The application was deployed with Firebase and can be viewed here: [Budget-Calculator](https://budget-app-c059f.web.app/)
### Backend
The backend and REST API were written in Nodejs, with the database being made using PostgreSQL and the server with Express. Extensive use of Postman to test the functionality of the REST API and database before connecting to the frontend and the installation of CORS dependencies to limit CORS errors when connecting both ends.

## Prerequisites

Clone down both frontend and backend repos. Add .env files to your backend root file. You will need to create a Postgres database then pass these credentials into the .env file. It should contain the following:
- HOST
- DATABASE
- USER
- PORT
- PASSWORD

## Installation

1. Clone the frontend:
```
git clone https://github.com/brsm019/React-Budget-Calculator-Frontend.git
```
2. Clone the backend:
```
git clone https://github.com/brsm019/React-Budget-Calculator-Backend.git
```
3. Download the required npm modules for **both** repos from their root folders:
```
npm i
```
4. Create the .env file in the root folder of the backend.
5. Add the credentials received from where ever you are hosting the database.
6. Run the create-table script in the root folder of the backend via the command line:
```
npm run create-tables
```
7. Run the populate-table script in the root folder of the backend via the command line:
```
npm run populate-tables
```
8. Start the both the frontend and backend from their respected root folders:
```
npm start
```

## Usage

Add income, expenditure, delete fields, check to see it all adds up and resize the screen to test it's responsiveness.

Navigate to the sites frontend here for a quick glance at the UI: [Budget-Calculator](https://budget-app-c059f.web.app/). 

