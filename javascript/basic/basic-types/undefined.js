/*
 * @Author: kingford
 * @Date: 2021-07-22 14:54:56
 * @LastEditTime: 2021-07-22 16:07:28
 */

// undefined boolean number string symbol

let a;

console.log("a:", a);

function add(a = 1, b) {
  console.log("b:", b);
  return;
}

add();

console.log("d:", add());

let c = { name: "xx" };

console.log("c:", c.age);
