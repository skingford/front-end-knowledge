/*
 * @Author: kingford
 * @Date: 2021-05-10 10:55:39
 * @LastEditTime: 2021-05-10 11:42:42
 */

// 效果：如果短时间内大量触发同一事件，只会执行一次函数
// 应用场景：input输入框、屏幕resize、滚动、拖动

function debounce(fn, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay);
  };
}

let log = debounce(function () {
  console.log("debounce log");
});

log();
log();
log();
