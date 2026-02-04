const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  const result = await db.query("SELECT NOW()");
  res.json({ time: result.rows[0] });
});

module.exports = router;
