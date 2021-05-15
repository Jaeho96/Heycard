const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const PORT = 3001;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "596265aq!@#",
  database: "heycard",
});

app.use(cors());
app.use(express.json());
app.use(express.static("uploads")); //정적파일 다루기 위한 설정
app.use(bodyParser.urlencoded({ extended: true }));

//명함 삭제하기(명함보관함) -> /api/contents/manageCard/delete
app.post("/delete", (req, res) => {
  if (!req.secure) {
    let sql = `DELETE FROM contents WHERE title = ? AND logmail = ?;`;
    let params = [req.body.title, req.body.logmail];
    db.query(sql, params, function (err, result) {
      if (err) {
        console.log("query is not excuted. delete fail...\n" + err);
        resultToJson = JSON.stringify("N");
        console.log(resultToJson);
        res.send(resultToJson);
      } else {
        resultToJson = JSON.stringify("Y");
        console.log(resultToJson);
        res.send(resultToJson);
      }
    });
  }
});

app.get("/api/get", (req, res) => {
  // 보관함에서
  const sqlSelect = "SELECT * FROM contents;";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/get/title", (req, res) => {
  const sqlSelecttitle = "SELECT title FROM contents;";
  db.query(sqlSelecttitle, (err, result) => {
    // res.send(result);
    console.log(result);
  });
});

app.post("/api/insert", (req, res) => {
  const color = req.body.color;
  const logmail = req.body.logmail;
  const name = req.body.name;
  const mail = req.body.mail;
  const corporate = req.body.corporate;
  const position = req.body.position;
  const phonenumber = req.body.phonenumber;
  const officenumber = req.body.officenumber;
  const address = req.body.address;
  const introduce = req.body.introduce;
  const img = req.body.img;
  const token = req.body.token;
  const title = req.body.title;

  const sqlInsert =
    "INSERT INTO contents (color, name, mail, logmail ,corporate, position, phonenumber, officenumber, address, introduce, img, token, title) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
  db.query(
    sqlInsert,
    [
      color,
      logmail,
      name,
      mail,
      corporate,
      position,
      phonenumber,
      officenumber,
      address,
      introduce,
      img,
      token,
      title,
    ],
    (err, result) => {
      console.log(err);
    }
  );
});

app.listen(PORT, () => {
  //3001포트에서 express가 실행되면 터미널에 로그출력
  console.log(`running on port ${PORT}`);
});
