var express = require("express");
var router = express.Router();

// GET http://localhost:3000/
router.get("/", async (req, res) => {
  const searchTerm = req.query.q;

  var searchWord = searchTerm;

  const db = req.app.locals.db;

  const sql = `
    SELECT *
      FROM game
     WHERE title ILIKE '%' || $1 || '%'
  `;

  const result = await db.query(sql, [searchTerm]);

  res.render("search", {
    title: "Sökresultat",
    Games: result.rows,
    searchWord,
  });
});

module.exports = router;
