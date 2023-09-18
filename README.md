# Product inventory app

A minimalistic product inventory system to manage product inventory.It allows users to create new products, list available products,view their stocks and prices. 

## Technologies used

* [Docker](https://www.docker.com/)
* [Postgres SQL database](https://www.postgresql.org/)
* [Hasura GraphQL server](https://hasura.io/)
* [Typescript](https://www.typescriptlang.org/)
* [React](https://react.dev/)
* [Apollo GraphQL client](https://www.apollographql.com/docs/react/)
* [Ant Design UI library](https://ant.design/)


## Getting Started

```sh
# Clone this repo to your local machine
git clone <repository-url>
cd product-inventory-app-frontend

# install dependencies
npm i

# start frontend server
npm start

# start postgres & hasura
docker compose up
```

The application will be accessible at http://localhost:3000/, and the Hasura GraphQL console can be accessed at http://localhost:8080/console.


