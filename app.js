const express = require('express');
var app = express();
const path = require("path");
const Users = require("./models/user.js")
const db = require("./models/db.js")
const bodyParser = require("body-parser");
//const { Op } = require("sequelize");

//config
    //template engine
    const User = require('./models/user.js');


    app.set("view engine", "ejs");
    app.set('views', './views');

    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    app.use(express.static('public'));

    app.use(express.json());

app.get("/", function(req, res){
    res.render('index')
})



app.get("/dash", async(req, res) => {



    User.findAll({
      }).then(
          function(elementos){

              res.render("dashboard", {posts: elementos})
          }
      );
})

app.post("/pesquisa", function(req, res){
    
})

app.post("/add", function(req, res){
    Users.create(
        {
            id: null,
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
            mensagem: req.body.mensagem
        }
    ).then(
        function(){
            res.redirect("/");
        }
    ).catch(
        function(err){
            console.log("Deu erro: " + err);
        }
    )
})

app.listen(9091, function(){
    console.log("Funcionando");
})