const express = require("express");
const db = require("./config/connection");
const path = require("path");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "prduction") {
  app.use(express.static(path.join(_dirname, "../client/build")));
}

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`))
});
