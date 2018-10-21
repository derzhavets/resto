# Resto
Restaurant reservation service

## Running project 
- Clone this repo to your local folder

### Server
- Start local mongodb service on default port 27017 and create database "resto"
- Enter /server folder and run *npm install*
- Start server by running *node app.js*
- Issue several POST requests to "localhost:3000/resto/create-resto" with body { "name" : "your_restaurant_name", "numOfTables" : your_number_of_tables } to insert restaurants into your local db

### Client
- Enter /client folder and run *npm install*
- Run *npm start* to start the app
- Go to localhost:4200 in your browser



