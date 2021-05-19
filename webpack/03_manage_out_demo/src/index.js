/*
 * @Author: kingford
 * @Date: 2021-05-18 13:49:33
 * @LastEditTime: 2021-05-18 15:30:58
 */
import _ from "lodash";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  element.innerHTML = _.join(["Hello", "wepack"], "");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
