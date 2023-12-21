const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const path = require("path");
const { authMiddleware } = require("./utils/auth");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const routes = require("./routes");

const PORT = process.env.PORT || 3006;
const app = express();
console.log(process.env.NODE_ENV); 
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(routes);

  app.use(
    "/graphql",
    expressMiddleware(
      server,

      {
        context: authMiddleware,
      }
    )
  );
  // if (process.env.NODE_ENV === "production") {
  //   app.use(express.static(path.join(__dirname, "../client/dist")));

  //   app.get("*", (req, res) => {
  //     res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  //   });
  // }

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();
