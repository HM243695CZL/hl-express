/**
 * 将平面结构转换成树形结构
 */
const toTreeData = (data) => {
  let map = {};
  data.forEach((node) => {
    map[node.id] = node;
    node.children = [];
  });
  let roots = [];
  data.forEach((node) => {
    if (node.pid !== null) {
      map[node.pid].children.push(node);
    } else {
      roots.push(node);
    }
  });
  return roots;
}
module.exports = {
    toTreeData
}
