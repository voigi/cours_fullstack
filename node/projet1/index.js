const http = require('http');
const host = '127.0.0.1';
const port = 3000;
const server = http.createServer((req,res)=>{
    res.statusCode= 200;
    res.setHeader('Content-Type','text/html');
    const url = req.url
    if (req.url == '/'){
        
        
        res.end(`Coucou tu est sur la page d'acceuil`);
    }
    if(req.url == '/user'){
       
       
        res.end(`Salut tu est sur la partie de connexion`);
    }
    if(req.url == '/commande'){
        
  
        res.end(`Coucou passons une commande`);
    }else
        res.statusCode= 404;
        res.end(`Je n'aime pas les autres routes`);

    //console.log(url);
    res.end('Ca marche');
})

server.listen(port,host,()=>{
    console.log(`le server tourne port ${port}`);
})