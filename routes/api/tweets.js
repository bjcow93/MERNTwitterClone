const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.json({ msg: "This is the tweets route" }));

module.exports = router;