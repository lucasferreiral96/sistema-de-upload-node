const express = require("express");
const app = express();
const ejs = require("ejs");
const multer = require("multer");
const path = require("path");




app.set('view engine', 'ejs');

const storage = multer.diskStorage({
    destination: function(req, arquivo, cb){
        cb(null, "uploads/")
    },
    filename: function(req, file, cb){
        cb(null, file.originalname + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage});


app.get("/", (req, res) => {
res.render("index");
})

app.post("/uploads", upload.single("arq"), (req, res) => {

    res.send("<h1 style='color: green; font-family: sans-serif; text-align: center; top: 50%'>Arquivo enviado!</h1><br>"+ "<a href='/'> Voltar </a>");
    
})

app.listen(8080, () => {
    console.log("Você se conectou ao servidor NodeJS...");
})