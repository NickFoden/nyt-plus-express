require("dotenv").config();
import express from "express";
import { ApolloServer } from "apollo-server-express";

import resolvers from "./src/graphql/resolvers";
import typeDefs from "./src/graphql/schema";

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    data: "ah yeah",
  }),
});

server.applyMiddleware({ app });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, nyt-plus-secret",
  );
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});


app.get("/", async (req: express.Request, res: express.Response) => {
  return res.status(200).send({
    data: [],
    message: "service is up",
  });
});


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Server started on " + port);
});
