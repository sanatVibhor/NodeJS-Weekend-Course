const http = require('http');
const path = require('path');
const fs = require('fs');

//making a serve robject
const server=http.createServer((req,res)=>{
if(req.url==='/'){
    fs.readFile(
        path.join(__dirname,'public','index.html'),
        (err,content)=>{ //data is called content here
            if(err) throw err;
            res.writeHead(200,{'content-type': 'index.html'});
            res.end(content); //we want to show the content of the file
        }
    )
}
if(req.url==='/about'){
    fs.readFile(
        path.join(__dirname,'public','about.html'),
        (err,content)=>{ //data is called content here
            if(err) throw err;
            res.writeHead(200,{'content-type': 'about.html'});
            res.end(content); //we want to show the content of the file
        }
    )
}
   
});
const PORT=process.env.PORT||3000;

server.listen(PORT,()=>console.log(`sever running on ${PORT}`));