const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const uuid = require("uuid");
const path = require("path");
const router = require("./routes"); 

const express = require("express");
const app = express();

//settings
app.set("view engine", "ejs");

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
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
app.use(express.json());
app.use("/", router);

(module.exports = app), morgan;

