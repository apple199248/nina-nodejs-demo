var http = require('http');//1引入required模块
// 用http.createServer()方法创建服务器，用listen方法绑定8888端口，通过request、response参数来接收响应数据
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');