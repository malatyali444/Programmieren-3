var express = require("express");
var app = express();
app.get("/", function (req,res)
{ res.send("<h1> Hello world </>");
    
});



app.get("/name/:name", function (req,res)
{ 
    var name = req.params.name;
    res.redirect('https://google.com/search?q=' + name);
    // res.send("<h1> Hello"+ name + "</>");

});

app.listen(3000, function(){
    console.log("Example is running on Port 3000")
});