/*
 * @Author: kingford
 * @Date: 2021-05-12 10:11:29
 * @LastEditTime: 2021-05-12 10:16:44
 */
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain;charset=utf-8");
  res.end("hello world 你好，世界\n");
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});
