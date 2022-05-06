var express = require("express");
var router = express.Router();

// GET http://localhost:3000/
router.get("/new", async (req, res) => {
  const db = req.app.locals.db;

  const everyHighscore = await getHighscore(db);
  res.render("admin/score/newScore", {
    title: "Nytt Highscore",
    everyHighscore: everyHighscore,
  });
});

router.post("/new", async (req, res) => {
  const { game, player, date, points } = req.body;

  const highscore = {
    game,
    player,
    date,
    points,
    UrlSlug: generateURLSlug(game),
  };
  const db = req.app.locals.db;

  await saveHighscore(highscore, db);

  res.redirect("/admin/games");
});

async function saveHighscore(highscore, db) {
  const sql = `
        INSERT INTO score(
          game,
          player,
          score_date,
          points,
          url_slug
        ) VALUES ($1,$2,$3,$4,$5)
    `;

  await db.query(sql, [
    highscore.game,
    highscore.player,
    highscore.date,
    highscore.points,
    highscore.UrlSlug,
  ]);
}

const generateURLSlug = (game) => {
  return game;
};

async function getHighscore(db) {
  const sql = `
        SELECT 
          title
          FROM game
    `;

  const result = await db.query(sql);

  return result.rows;
}

module.exports = router;
