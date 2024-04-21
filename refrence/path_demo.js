const path=require('path');
//Base file name
console.log(path.basename(__filename));
//Directory name
console.log(path.dirname(__dirname));
//extension name
console.log(path.extname(__filename));
//path object
console.log(path.parse(__filename));
