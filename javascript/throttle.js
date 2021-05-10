/*
 * @Author: kingford
 * @Date: 2021-05-10 11:05:50
 * @LastEditTime: 2021-05-10 11:57:06
 */

// 效果：如果短时间内大量触发同一事件，那么在函数执行一次之后，该函数在指定的时间期限内不再工作，直至过了这段时间才重新生效。
// 应用场景：滚动、拖动
// 节流函数不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，而防抖动只是在最后一次事件后才触发一次函数

// 定时器
function throttle2(func, delay) {
  var timer = null;
  return function () {
    var context = this;
    var args = arguments;
    if (!timer) {
      timer = setTimeout(function () {
        func.apply(context, args);
        timer = null;
      }, delay);
    }
  };
}

// 时间戳与定时器
function throttle(func, delay) {
  let timer = null;
  let startTime = Date.now();

  return function () {
    let curTime = Date.now();
    let remaining = delay - (curTime - startTime);
    let context = this;
    let args = arguments;

    clearTimeout(timer);
    if (remaining <= 0) {
      func.apply(context, args);
      startTime = Date.now();
    } else {
      timer = setTimeout(func, remaining);
    }
  };
}

let log = throttle(function () {
  console.log("throttle time log");
  console.log(Math.random());
});

log();
log();
log();
