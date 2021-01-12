const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

const PORT = 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../../client/src")));

app.listen(PORT, () => console.log("server start.."));
