const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });


const newSchema = new mongoose.Schema({
    name:{
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
});
  
const collection= mongoose.model("Signup",newSchema);
module.exports=collection;
