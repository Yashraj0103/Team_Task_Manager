require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/task"));  
app.use("/api/dashboard", require("./routes/dashboard"));
app.use("/api/projects", require("./routes/project"));
app.use("/api/users", require("./routes/user"));


app.get("/", (req, res) => {
  res.send("API Working");
});


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port", PORT);
});
  })
  .catch(err => console.log(err));