const express = require('express');
const app = express();
app.use(express.static('public'));
const port= porcess.env.PORT || 3000;


app.listen(port, ()=>{
    console.log('Servidor funcionando en el puerto '+ port );
});

app.get('/home', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/registro', (req,res)=>{
    res.sendFile(__dirname + '/views/registro.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
})