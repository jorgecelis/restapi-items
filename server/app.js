const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const uuid = require("uuid");
const path = require("path");
const cors = require("cors");
const router = require("./routes");
const ErrorMiddleware = require("./src/middlewares/error.middleware");

const express = require("express");
const app = express();

app.use(cors());
//settings
app.set("view engine", "ejs");

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
// const storage = multer.diskStorage({
//     destination: path.join(__dirname, 'public/img/uploads'),
//     filename: (req, file, cb, filename) => {
//         console.log(file);
//         cb(null, uuid() + path.extname(file.originalname));
//     }
// })
// app.use(multer({storage}).single('image'));

// Global variables
app.use((req, res, next) => {
  // app.locals.format = format;
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
