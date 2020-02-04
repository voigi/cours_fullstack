const http = require('http');
const host = '127.0.0.1';
const port = 3000;
const server = http.createServer((req,res)=>{
    res.statusCode= 200;
    res.setHeader('Content-Type','text/html');
const url = req.url;
const method =req.method;
const requestURL = url.parse(req.url);
const parts = (requestURL.path).split('/');
const users = [
    {
        name:'Greg',
        city:'Bordeaux'
    },
       {name:'François',
        city:'Roubaix'
    }
    ];

    if (method === 'GET'&& parts[1]==''){
        res.end(JSON.stringify(users));
    }
        
        
       
})

server.listen(port,host,()=>{
    console.log(`le server tourne port ${port}`);
})