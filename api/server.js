const express = require("express");
const cors = require("cors");
const session = require("express-session");
const knex = require("../data/db-config");
const KnexStore = require("connect-session-knex")(session); //To curry and pass the session

const apiRouter = require("./api-router");

const configureMiddleware = require("./configure-middleware");

const server = express();
configureMiddleware(server);

const sessionConfig = {
  name: "monster",
  secret: "keep it secret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 10,
    secure: false, // should be true in production
    httpOnly: true // true means JS can't touch the cookie
  },
  store: new KnexStore({
    knex,
    tablename: "sessions",
    createtable: true,
    sidfieldname: "sid",
    clearInterval: 1000 * 60 * 15
  })
};

const corsConfig = {
  origin: "http://localhost:3000",
  credentials: true
};

server.use(express.json());
server.use(cors(corsConfig));
server.use(session(sessionConfig));
server.use("/api", apiRouter);

server.get("/", (req, res) => {
  console.log(req.session);
  res.json({ api: "up" });
});

module.exports = server;
