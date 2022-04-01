var express = require("express");
var app = express();
const path = require("path")

app.use(express.static('public'))
app.use(express.static('css'))

app.get("/index", function(req, res){
    res.sendFile(path.join(__dirname + "/index.html"))
})



app.listen(9090, function(){
    console.log("Rodando Normalmente")
});