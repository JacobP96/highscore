var express = require("express");
var router = express.Router();

// GET http://localhost:3000/
router.get("/", async function (req, res) {
  const db = req.app.locals.db;

  const sql = `
  select * from score
  inner join game
  on score.game = game.url_slug
  order by points DESC
  

`;

  const result = await db.query(sql);

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

  res.render("index", {
    title: "highscore",
    allHighscores: highscores,
  });
});

module.exports = router;
