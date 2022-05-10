var express = require("express");
var router = express.Router();

// GET http://localhost:3000/
router.get("/", async function (req, res) {
  const db = req.app.locals.db;

  const sql = `
  SELECT *
  FROM
    score
    ORDER BY points DESC;

`;
  const sql2 = `
  SELECT title,
  url_slug
  FROM
    game
`;

  const result = await db.query(sql);

  const result2 = await db.query(sql2);

  (highscores = result.rows),
    (highscores = highscores.reduce((acc, cur) => {
      if (acc.map((item) => item.game).includes(cur.game)) {
        let found = acc.find((entry) => entry.game === cur.game);
        found.message.push(cur.message);
        return acc;
      } else {
        cur.message = [cur.message];
        acc.push(cur);
        return acc;
      }
    }, []));

  gameTitle = result2.rows;

  res.render("index", {
    title: "highscore",
    allHighscores: highscores,
    Titlegame: gameTitle,
  });
});

module.exports = router;
