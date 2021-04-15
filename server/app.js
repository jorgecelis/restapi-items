const helmet = require("helmet");
const morgan = require("morgan");
const uuid = require("uuid");
const path = require("path");
const cors = require("cors");
const router = require("./routes");
const ErrorMiddleware = require("./src/middlewares/error.middleware");

const express = require("express");
const app = express();

app.use(cors());

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// Global variables
app.use((req, res, next) => {
  next();
});

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(ErrorMiddleware.catchGenericErrors);
app.use("", router);
app.use(ErrorMiddleware.catchNotFoundError);

(module.exports = app), morgan;
