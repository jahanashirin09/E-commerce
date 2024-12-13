const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.connect(
  "mongodb+srv://jahanashrn411:jahanashirin@project1.9ktuc.mongodb.net/?retryWrites=true&w=majority&appName=project1",
  { dbName: "cart" }
).then(() => {
   console.log('databaseconnected'); 
})
    .catch((error) => {
    console.error("error=",error);
})

app.listen(3001, () => {
  console.log("server running");
});
