let fs = require('fs')
fs.readFile(__dirname+'/myfile.js',function(err,data)
{
    if(err) throw err;
    console.log(data.toString());
})