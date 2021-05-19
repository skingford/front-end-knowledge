/*
 * @Author: kingford
 * @Date: 2021-05-19 11:56:42
 * @LastEditTime: 2021-05-19 11:58:50
 */

import _ from "lodash";
export function join(a, b) {
  // return a+" "+b;
  return _.join([a, b], " ");
}
