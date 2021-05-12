/*
 * @Author: kingford
 * @Date: 2021-05-12 10:32:58
 * @LastEditTime: 2021-05-12 10:49:15
 */
console.info("程序开始执行：");

console.log("__filename:", __filename);
console.log("__dirname:", __dirname);

console.error("test error");

var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");
//
// 执行一些代码
//

console.timeEnd("获取数据");

console.info("程序执行完毕。");

// console.log
// console.info
// console.warn
// consele.error
// console.dir
// consele.asset
