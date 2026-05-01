const express = require("express");
const router = express.Router();

const Task = require("../models/Task");
const auth = require("../middleware/auth");


// ✅ CREATE TASK
router.post("/", auth, async (req, res) => {
  try {
    const { title, project, assignedTo } = req.body;

    if (!title) {
      return res.status(400).json({ msg: "Title required" });
    }

    const task = new Task({
      title,
      project,
      assignedTo,
      status: "pending"
    });

    await task.save();
    res.json(task);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ DASHBOARD STATS
router.get("/stats", auth, async (req, res) => {
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


// ✅ TOGGLE STATUS
router.put("/:id/status", auth, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    if (task.status === "pending") task.status = "inProgress";
    else if (task.status === "inProgress") task.status = "done";
    else task.status = "pending";

    await task.save();
    res.json(task);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;