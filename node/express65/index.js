const express = require('express');
const app = express();

app.get ('/',(req,res)=>{
    res.send('Salut tout le monde');
})


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post ('/',(req,res)=>{
    console.log(req,body.name);
    res.json({name:'Greg'});
})


app.listen (3000,()=>{
    console.log('le serveur tourne');
});