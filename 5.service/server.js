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

//正则表达式要求如下： 1: 必须包含数字和字母 2：长度必须在8到15位之内（包括8—15位）
/^(?![^a-zA-Z]+$)(?!\D+$).{8,15}$/

var str = 'aaaaabbbbccccdd';
str = str.replace(/(\w)\1+/g,"$1");
console.log(str);