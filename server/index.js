const express = require("express");
const collection = require('./mongo');
const dreamCollection = require('./dream'); 
const cors = require("cors");
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.use(cors(
//     {
//         origin: ["https://dreamscape-explorer.vercel.app"],
//         methods: ["POST", "GET"],
//         credentials: true
//     }
// ));

app.post("/signup", async (req, res) => {
  const { name, dob, phone, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await collection.insertMany([{ name, dob, phone, email, password: hashedPassword }]);
    res.sendStatus(200);
  } catch (error) {
    console.error("Error in insertMany:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await collection.findOne({ email: email });

    if (user) {
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/dream", async (req, res) => {
  const { email, name, date, dream } = req.body;
  
  console.log('Received Dream Request:', { email, name, date, dream });


  try {
    const user = await collection.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await dreamCollection.create({ userId: user._id,email, name, date, dream });

    res.sendStatus(200);
  } catch (error) {
    console.error("Error in submitting dream:", error);
  }
});


app.post("/dreams", async (req, res) => {
  const { email } = req.body;
  console.log("Received email:", email);

  try {
    const dreams = await dreamCollection.find({ email });
    console.log("Fetched dreams:", dreams);
    res.json(dreams);
  } catch (error) {
    console.error("Error fetching dreams:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
});



app.listen(5000, () => {
  console.log("Running...");
});
