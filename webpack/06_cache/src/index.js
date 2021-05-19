/*
 * @Author: kingford
 * @Date: 2021-05-18 13:49:33
 * @LastEditTime: 2021-05-18 16:34:04
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

  const h1 = document.createElement("h1");
  h1.innerHTML = "This  is  title";
  element.appendChild(h1);

  return element;
}

document.body.appendChild(component());
