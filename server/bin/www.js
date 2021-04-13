const dotenv = require("dotenv");
const app = require("../app");
const mongoose = require("mongoose");

/** Set local environment variables */
// if (process.env.NODE_ENV === 'dev') {
dotenv.config();
// }

//settings
app.set("port", process.env.PORT || 3000);

//start server
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});

//Set up default mongoose connection
const mongoDB = process.env.URI;

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })

  .then((db) => console.log("conectado a mongodb"))
  .catch((err) => console.log(err));
