// A GraphQL server from Apollo that works with any Node.js HTTP framework
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `
   type Query {
      hello: String,
      title: String,
      car: Car
   }
      type Car {
      name: String
      brand: String
      }
`;

const resolvers = {
  Query: {
    hello: () => "Hello World!",
    title: () => "Deepak",
    car: () => ({
      name: "Innova",
      brand: "Toyota",
    }),

  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);

console.log(`🚀 Server ready at ${url}`);