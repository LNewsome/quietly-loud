var express = require("express");
var hbs     = require("express-handlebars")
var app     = express();

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:     ".hbs",
  partialsDir: "views/",
  layoutsDir:  "views/",
  defaultLayout:"layout-main"
}));
app.use("/public", express.static("public"));

app.get("/", function(req, res){
    res.render("app-welcome");
});

app.listen(3003, function(){
  console.log("Work!")
});
