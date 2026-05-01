~require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Auth routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Task routes
const taskRoutes = require("./routes/Task");
app.use("/api/tasks", taskRoutes);

const dashboardRoutes = require("./routes/dashboard");
app.use("/api/dashboard", dashboardRoutes);

const projectRoutes = require("./routes/project");
app.use("/api/projects", projectRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port", PORT));

const cors = require("cors");
app.use(cors());

app.use("/api/users", require("./routes/user"));

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(5000, () => console.log("Server running on port 5000")); 