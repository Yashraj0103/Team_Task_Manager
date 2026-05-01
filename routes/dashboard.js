const express = require("express");
const router = express.Router();

const Task = require("../models/Task");
const auth = require("../middleware/auth");

// ✅ Dashboard API
router.get("/", auth, async (req, res) => {
  try {
    const tasks = await Task.find();

    const total = tasks.length;
    const pending = tasks.filter(t => t.status === "pending").length;
    const inProgress = tasks.filter(t => t.status === "inProgress").length;
    const done = tasks.filter(t => t.status === "done").length;

    const now = new Date();
    const overdue = tasks.filter(
      t => t.dueDate && new Date(t.dueDate) < now && t.status !== "done"
    ).length;

    res.json({
      total,
      pending,
      inProgress,
      done,
      overdue
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;