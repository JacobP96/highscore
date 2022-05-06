var express = require("express");
var router = express.Router();

// GET /admin/products
router.get("/", async (req, res) => {
  const db = req.app.locals.db;

  const games = await getGames(db);

  res.render("admin/games/index", {
    title: "Spel",
    games,
  });
});

// GET /admin/products/new
router.get("/new", async (req, res) => {
  res.render("admin/games/newGame", {
    title: "Nytt Spel",
  });
});

router.post("/new", async (req, res) => {
  const { Title, Description, ImageUrl, Genre, ReleaseDate } = req.body;

  const game = {
    Title,
    Description,
    ImageUrl,
    Genre,
    ReleaseDate,
  };
  const db = req.app.locals.db;

  await saveGame(game, db);

  res.redirect("/admin/games");
});

async function saveGame(game, db) {
  const sql = `
        INSERT INTO game (
          title,
          description,
          image_url,
          genre,
          release_date
        ) VALUES ($1,$2,$3,$4,$5)
    `;

  await db.query(sql, [
    game.Title,
    game.Description,
    game.ImageUrl,
    game.Genre,
    game.ReleaseDate,
  ]);
}

async function getGames(db) {
  const sql = `
        SELECT id,
               title,
               description,
               image_url,
               genre,
               release_date
          FROM game
    `;

  const result = await db.query(sql);

  return result.rows;
}

module.exports = router;
