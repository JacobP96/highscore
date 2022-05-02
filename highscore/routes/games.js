var express = require("express");
var router = express.Router();

// GET http://localhost:3000/
router.get("/:url_slug", async function (req, res) {
  const db = req.app.locals.db;

  const sql = `
  SELECT 
    title,
    genre,
    release_date,
    description,
    url_slug
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
    title: "Spelets title",
    gamesInfo: result.row,
    highscoreInfo: result2.row,
  });
});

module.exports = router;
