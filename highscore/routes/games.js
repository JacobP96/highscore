var express = require("express");
var router = express.Router();

// GET http://localhost:3000/
router.get("/:urlSlug", async function (req, res) {
  const db = req.app.locals.db;

  const urlSlug = req.params.urlSlug;

  const sql = `
  SELECT
   * 
   from score
   WHERE game = $1
   order by points DESC 
   Limit 10

`;

  const sql2 = `
  SELECT
   * 
   from game
   WHERE url_slug = $1
  

`;

  const result = await db.query(sql, [urlSlug]);

  const result2 = await db.query(sql2, [urlSlug]);

  const score = result2.rows[0];

  res.render("gameInfo", {
    title: score.title,
    game: result.rows,
    score: score,
  });
});

module.exports = router;
