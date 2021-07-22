/*
 * @Author: kingford
 * @Date: 2021-07-22 14:51:45
 * @LastEditTime: 2021-07-22 16:00:51
 */

let a = { age: 1, k: { v: 1 } };
let b = a;

b.age = 12;
b.k.v = 12;

console.log(a);

// a= { age: 12, k: { v: 12 } };
let c = { ...a };

c.age = 19;
c.k.v = 2;

// a= { age: 12, k: { v: 2 } };
console.log(a);

let d = Object.assign({}, a);
d.age = 20;
d.k.v = "10";

// a= { age: 12, k: { v: "10" } };
console.log(a);
