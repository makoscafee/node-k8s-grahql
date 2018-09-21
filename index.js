import { startDB, models } from './db';
import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const db = startDB(`mongodb://shopify:challenge123@ds111113.mlab.com:11113/shopify-challenge`);

const context = {
  models,
  db
};

const server = new GraphQLServer({
  typeDefs: `${__dirname}/graphql/schema.graphql`,
  resolvers,
  context
});

const opts = {
  port: process.env.PORT || 8080
};

server.start(opts, () => {
  console.log(`🚀 Server ready at http://localhost:${opts.port}`);
});
