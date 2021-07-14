/*
 * @Author: kingford
 * @Date: 2021-07-14 23:05:08
 * @LastEditTime: 2021-07-14 23:23:55
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
 *
 * 性能中等
 * @param {*} items
 * @return {*}
 */
function arrayToTree(items) {
  const result = []; // 存放结果集
  const itemMap = {}; //

  // 先转成map存储
  for (const item of items) {
    itemMap[item.id] = { ...item, children: [] };
  }

  for (const item of items) {
    const id = item.id;
    const pid = item.pid;
    const treeItem = itemMap[id];
    if (pid === 0) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        };
      }
      itemMap[pid].children.push(treeItem);
    }
  }
  return result;
}

const tree = arrayToTree(arr);
document.getElementById("pre").innerHTML = tree;
console.log(tree);
