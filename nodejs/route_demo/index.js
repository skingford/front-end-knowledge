/*
 * @Author: kingford
 * @Date: 2021-05-12 09:37:08
 * @LastEditTime: 2021-05-12 09:38:05
 */
var server = require("./server");
var router = require("./router");

server.start(router.route);
