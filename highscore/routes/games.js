var express = require("express");
var router = express.Router();

// GET http://localhost:3000/
router.get("/:urlSlug", async function (req, res) {
  const db = req.app.locals.db;

  const sql = `
  SELECT game,
    player,
    score_date,
    points
    FROM highscores
`;

  const sql2 = `
SELECT id,
title,
description,
image_url,
genre,
release_date,
url_slug
FROM game
`;

  const result = await db.query(sql);
  const result2 = await db.query(sql2);

  res.render("gameInfo", {
    title: "highscore",
    Highscores: result.rows,
    Games: result2.rows,
  });
});

module.exports = router;
