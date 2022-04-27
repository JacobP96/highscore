var express = require("express");
var router = express.Router();

// GET http://localhost:3000/
router.get("/", async function (req, res) {
  const db = req.app.locals.db;

  const sql = `
  SELECT id,
    title,
    genre,
    release_date
    FROM game
`;

  const result = await db.query(sql);

  res.render("admin", {
    title: "Sök spel",
    allGames: result.rows,
  });
});

module.exports = router;
