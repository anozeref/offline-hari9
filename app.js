const http=require('http');
const port = "3000";
const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        'content-type': 'text/html',
    });
res.write('Hai.');
res.end();
});
server.listen(port,()=>{
    console.log(`Connecting to port.... ${port}`);
});