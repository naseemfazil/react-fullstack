// 3rd party module
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

// app.use('/', (req, res) => {
//     res.json('Express work')
// })
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

///router

const studentRouter = require("./router/rperson");

app.use("/student", studentRouter);

app.listen(3001, () => {
  console.log("Server Started");
});

// db connect
mongoose.connect(
  "mongodb+srv://codingspace:codingspacedev@cluster0.4yk93.mongodb.net/person",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, docs) => {
    if (err) {
      console.log("DB not connect");
      console.log(err);
    } else {
      console.log("DB connct");
    }
  }
);
