/*
 * @Author: kingford
 * @Date: 2021-05-12 14:19:37
 * @LastEditTime: 2021-05-12 15:46:12
 */
// 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。
// 限制：
// 0 <= len(s) <= 100
// 如果你不使用额外的数据结构，会很加分。

function isUnique(astr) {
  // astr
  if (astr.length == 1) {
    return true;
  }

  for (let i = 0; i < astr.length - 1; i++) {
    for (let j = i + 1; j < astr.length; j++) {
      if (astr[i] == astr[j]) {
        return false;
      }
    }
  }
  return true;
}

// console.log(isUnique("leetcode"));
// console.log(isUnique("abc"));
// console.log(isUnique("a"));
// console.log(isUnique("a234356ffe"));
// console.log(isUnique("abcd324"));

function isUnique2(astr) {
  // astr
  if (astr.length == 1) {
    return true;
  }

  for (let i = 0; i < astr.length; i++) {
    if (astr.indexOf(astr[i], i + 1) > -1) {
      return false;
    }
  }
  return true;
}

console.log(isUnique2("a234356ffe"));
console.log(isUnique2("abcd324"));
