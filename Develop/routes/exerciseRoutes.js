const router = require("express").Router();

router.post("/api/workouts", (req, res) => {
  res.send("test!!");
});

module.exports = router;
