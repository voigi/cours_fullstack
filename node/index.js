const http =  require('http');
const jsonVar = [
{
    name:'Greg',
    city:'Bordeaux'
},
   {name:'François',
    city:'Roubaix'
}
];
const hostname = '127.0.0.1';
const port=3000;

const server=http.createServer((req,res) => {
    res.statusCode= 200;
     //res.setHeader('Content-Type','text/html');
    res.setHeader('Content-Type','application/json');
    //res.end(`<h1>Coucou François</h1>`);
    res.end(JSON.stringify(jsonVar));

})

server.listen(port,hostname, ()=>{
    console.log('Bravo tu apelles bien le server');
})