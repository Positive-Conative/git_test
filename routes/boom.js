var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {});

router.get("/:abcc", function (req, res, next) {
  // boom/aaaa
  // 게시판 번호가 zzz인걸 가져오세요.
  console.log(req.query.name);

  // 데이터를 가져오기 (zzz)
  res.send("안녕하세요~~" + req.params.abcc);
});

module.exports = router;
