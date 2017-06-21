const express = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const todoArray = [];

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

/*let userData = {
  todoItem: ""
};*/

app.get("/", function(req, res) {
     res.render("index",
  {
    checked: ["Learn Node Basics", "Learn Express basics", "Learn Mustache"],
    unchecked: ["Learn HTML form with Express", "Learn about authentication", "Learn how to connect to PostgreSQL", "Learn how to create databases", "Learn SQL", "Learn how to connect to PostgreSQL form Node", "Learn how to use Sequelize"]
  }
  )
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})