const express = require('express');
const app = express();
let users=[{name:'Greg'},{name:'François'}];

// app.get ('/',(req,res)=>{
//     res.send('Salut tout le monde');
// })


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get ('/',(req,res)=>{
    
    res.json(users);
})


app.post ('/add',(req,res,next)=>{
    const newUser = {name: req.body.name};
    users.push(newUser);
    res.json(users);
})

app.delete ('/delete/:id',(req,res)=>{
    const id =req.params.id;
    users.splice(id,1);
    res.json(users);
})


app.listen (3000,()=>{
    console.log('le serveur tourne');
});