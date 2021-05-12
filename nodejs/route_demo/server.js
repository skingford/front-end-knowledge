/*
 * @Author: kingford
 * @Date: 2021-05-12 09:31:46
 * @LastEditTime: 2021-05-12 09:46:14
 */
var http = require("http");
var url = require("url");

function start() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    const myURL = new URL(
      "https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash"
    );
    console.log("hash:", myURL.hash);
    console.log("Request for " + pathname + " received.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
