let fs = require('fs');
HTMLTemplate="<!DOCTYPE html>\n<html lang='en'>\n<head>\n<meta charset='UTF-8'>\n<title>Document</title>\n</head>\n<body>\n</body>\n</html>"
MakeFiles();

//?making files for the web
function MakeFiles()
{      
    fs.writeFile("index.html",HTMLTemplate,(err)=>
    {
        if (err) throw err;
        console.log('HTML Deployed');
    });
    fs.writeFile("script.js","",(err)=>
    {
        if (err) throw err;
        console.log('JS Deployed');
    });
    fs.writeFile("style.css","",(err)=>
    {
        if (err) throw err;
        console.log('CSS Deployed');
    });
}
