var http = require('http');
var count = 0;
http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*');
    if(count++%2==0){
        res.statusCode = 500;
        res.end('500');
    }else{
        res.statusCode = 200;
        res.end('200');
    }

}).listen(8080);