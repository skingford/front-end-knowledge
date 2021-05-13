/*
 * @Author: kingford
 * @Date: 2021-05-13 17:17:45
 * @LastEditTime: 2021-05-13 17:18:33
 */
export function Logger2Middleware(req, res, next) {
  console.log(`Logger2 Request...`);
  next();
}
