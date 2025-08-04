var express = require("express");
var router = express.Router();
const mysql = require("../module/mysql");

/* GET users listing. */
router.get("/", function (req, res, next) {
  const sql = "SELECT title, content FROM YJ_board";
  mysql.query(sql, function (err, result1) {
    return res.json({
      result: result1,
      abc: 1,
    });
  });
});

router.post("/", function (req, res, next) {
  const title = req.body.title;
  const content = req.body.content;

  const sql = "INSERT INTO YJ_board(title, content) VALUES (?, ?)";
  mysql.query(sql, [title, content], function (err, result1) {
    if (err) {
      console.error(err);
    }

    return res.json({
      result: result1,
      abc: 1,
    });
  });
});

module.exports = router;
