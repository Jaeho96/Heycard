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

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM contents;";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const color = req.body.color;
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

  console.log(color);
  console.log(img);

  const sqlInsert =
    "INSERT INTO contents (color, name, mail, corporate, position, phonenumber, officenumber, address, introduce, img, token) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
  db.query(
    sqlInsert,
    [
      color,
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
