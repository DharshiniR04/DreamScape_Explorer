const mongoose = require("mongoose");

const dreamSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Signup',
  },
  email: {
    type:String,
    required:true,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  dream: {
    type: String,
    required: true,
  },
});

const dreamCollection = mongoose.model("Dream", dreamSchema);

module.exports = dreamCollection;
