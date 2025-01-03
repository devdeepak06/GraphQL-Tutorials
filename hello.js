// The reference implementation of the GraphQL specification, designed for running GraphQL in a Node.js environment.

import { buildSchema, graphql } from "graphql";
var schema = buildSchema(`
 type Query {
      hello: String,
      title: String,
      car: Car
   }
      type Car {
      name: String
      brand: String
      }
`)

var rootValue = {
  hello: () => "Hello world!",
  title: () => "Deepak",
  car: () => ({
    name: "Innova",
    brand: "Toyota"
  })
}

const source = `
  {
    hello
    title
    car {
      name
      brand
    }
  }
`;

graphql({ schema, source, rootValue }).then(response => {
  console.log(JSON.stringify(response, null, 2));
})