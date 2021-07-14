/*
 * @Author: kingford
 * @Date: 2021-07-14 22:54:31
 * @LastEditTime: 2021-07-14 23:04:28
 */
let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 2 },
  { id: 7, name: "部门6", pid: 2 },
  { id: 8, name: "部门7", pid: 0 },
  { id: 9, name: "部门8", pid: 0 },
  { id: 10, name: "部门9", pid: 0 },
];

/**
 * 递归查找，获取children
 */
const getChildren = (data, result, pid) => {
  for (const item of data) {
    if (item.pid === pid) {
      const newItem = { ...item, children: [] };
      result.push(newItem);
      getChildren(data, newItem.children, item.id);
    }
  }
};

/**
 * 转换方法
 */
const arrayToTree = (data, pid) => {
  const result = [];
  getChildren(data, result, pid);
  return result;
};

console.log(arrayToTree(arr, 0));
