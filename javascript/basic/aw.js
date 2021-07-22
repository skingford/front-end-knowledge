/*
 * @Author: kingford
 * @Date: 2021-07-22 17:00:50
 * @LastEditTime: 2021-07-22 17:13:59
 */
const num2Byte = Number(25).toString(2);

console.log(num2Byte); // 11001
// 1*2^4+1*2^3+0+0+1*2^0 = 16+8+1 = 25

const num1 = 25;
const num2 = ~num1;

// 25:  11001
// -26: 11010
console.log(num2);
console.log(parseInt(-26).toString(2));
