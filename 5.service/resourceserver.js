var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(__dirname));
app.use(require('body-parser').json());
app.get('/',function(req,res){
    res.sendFile(path.resolve('ngresource.html'));
});
var books = [{id:1,name:'node.js'}];


//当用户请求/books路径的时候
app.route('/books').get(function(req,res){
    res.send(books);
    //增加一个资源
}).post((req,res) => {
    //如何接收客户端传过来的post请求体
    var book = req.body;
    book.id = books[books.length-1].id+1;
    books.push(book);
    res.send(book);
});


app.route('/books/:id').delete((req,res)=>{
    books = books.filter((book) => {
        return book.id != req.params.id;
    });
    res.send({});
}).put((req,res)=>{
    books = books.map(item => {
        console.log(books);
        if(item.id == req.params.id){
            return req.body;
        }else{
            return item;
        }
    });
    console.log(books);
    res.send(req.body);
}).get((req,res)=>{
    res.send(books[0]);
});


app.listen(9090);