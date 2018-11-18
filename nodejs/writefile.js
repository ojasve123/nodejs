let fs = require('fs')
fs.writeFile(__dirname+'/myfile.js',"some DataCue edit",function(err)
{
    if(err) throw err;
    console.log("file was written")
})