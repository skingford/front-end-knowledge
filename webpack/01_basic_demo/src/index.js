/*
 * @Author: kingford
 * @Date: 2021-05-18 13:49:33
 * @LastEditTime: 2021-05-18 14:12:25
 */
import _ from "lodash";

function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "wepack"], "");
  return element;
}

document.body.appendChild(component());
