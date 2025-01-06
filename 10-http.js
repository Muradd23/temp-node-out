
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end('Welcome to our homepage');
    }
    if(req.url === '/about'){
        res.end('here is our short story');
    }
    res.end(`
    <h1>OPPS!</h1>
    <p>We cant seem find the page your looking for.</p>
    `);

});

server.listen(5000);
