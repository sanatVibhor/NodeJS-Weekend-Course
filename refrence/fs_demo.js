const fs=require('fs');
const path=require('path');

//create Folder
// fs.mkdir(path.join(__dirname,'/test'),{},err=>{
// if(err) throw err;
// console.log('Folder Created');
// });

//create files
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),
// 'Hello World !',
// err=>{
//     if(err) throw err;
//     console.log('File Written to...');
//     //file append

//     //callback is the append file 
//     fs.appendFile(path.join(__dirname,'/test','hello.txt'),
// 'i love node js',
// err=>{
//     if(err) throw err;
//     console.log('File Written to...');
// }
// );
// }
// );


//Read File
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})

