const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://dharshinirajaram48:dharshini@cluster0.wqmma6r.mongodb.net/dreamscape")
.then(()=>{
    console.log("connected!");
})
.catch(()=>{
    console.log("Not Connected!");
})

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