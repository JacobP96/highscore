var express = require("express");
var router = express.Router();

// GET http://localhost:3000/
router.get("/games", async function (req, res) {
  const db = req.app.locals.db;

  const sql = `
  SELECT id,
    title,
    genre,
    release_date
    FROM game
`;

  const result = await db.query(sql);

  res.render("admin/games", {
    title: "Sök spel",
    allGames: result.rows,
  });
});

// GET http://localhost:3000/
router.get("/games/new", function (req, res) {
  res.render("admin/newGame", {
    title: "Nytt spel",
  });
});

// GET http://localhost:3000/
router.get("/score/new", function (req, res) {
  res.render("admin/newScore", {
    title: "Nytt Highscore",
  });
});

module.exports = router;
