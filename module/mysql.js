const mysql = require("mysql2");

// db pool.. (이게 좋아요)
const dbInfo = {
  host: "conative.myds.me",
  port: 8085,
  user: "root",
  password: "kyj123",
  database: "myBlog",
};

module.exports = mysql.createConnection(dbInfo);
