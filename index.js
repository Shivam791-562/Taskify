const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./resolvers');
const db = require('./models');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
}

startServer();
