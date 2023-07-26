# Project #10 - Argent Bank API

This project was bootsrapped with Docker

This codebase contains the code needed to run the backend for Argent Bank.

## Getting Started

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

### Instructions

1. Clone the repo onto your computer
2. Open a terminal window in the cloned project
3. Run the following commands:


### Docker 

```bash

cd backend 

# Build docker
docker build -t api-bank .

# Run docker
docker-compose up -d 

# at first launch it's possible to populate the db with fake data 
docker exec -it {container ID} /bin/bash

# Run database Script on container
node ./scripts/populateDatabase.js

#Shutdown docker
 docker-compose down 

```

Your server should now be running at http://locahost:3001 and your db on port 27017. if you ran the populate script you will also have two users in your MongoDB database!

## Populated Database Data



### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

## Design Assets

Static HTML and CSS has been created for most of the site and is located in: `/designs`.

For some of the dynamic features, like toggling user editing, there is a mock-up for it in `/designs/wireframes/edit-user-name.png`.

And for the API model that you will be proposing for transactitons, the wireframe can be found in `/designs/wireframes/transactions.png`.
