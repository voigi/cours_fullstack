const http = require('http');
const url  = require('url');

const host = '127.0.0.1';
const port = 3000;
const server = http.createServer((req,res)=>{
    res.statusCode= 200;
    res.setHeader('Content-Type','text/html');
    const method =req.method;
    const requestURL = url.parse(req.url);
    console.log(requestURL);
    console.log(method);
    //res.end(requestURL.path);
    const parts = (requestURL.path).split('/');
    console.log(parts);
    res.end(parts[1]);
    //res.end(JSON.stringify({finished:true}));
})
server.listen(port,host,()=>{
    console.log(`le server tourne port ${port}`);
})