var express = require("express");
var router = express.Router();

// GET http://localhost:3000/
router.get("/new", function (req, res) {
  res.render("admin/score/newScore", {
    title: "Nytt Highscore",
  });
});

module.exports = router;
