var express = require("express");
var router = express.Router();

// GET http://localhost:3000/
router.get("/:title", async function (req, res) {
  const db = req.app.locals.db;

  const sql = `
  SELECT id,
    title,
    genre,
    release_date
    FROM game
`;
  const sql2 = `
  SELECT game,
  player,
  score_date,
  points
  FROM highscores
`;
  const result = await db.query(sql);
  const result2 = await db.query(sql2);

  res.render("gameInfo", {
    title: "spel",
    gameInfo: result.rows,
    highscoreInfo: result2.rows,
  });
});

module.exports = router;
