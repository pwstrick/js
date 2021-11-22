class Node {
  constructor(data) {
    this.data = data;
	this.left = null;
	this.right = null;
  }
}
class TreeList {
  constructor(datas) {
    this.root = null;
    datas.forEach((value) => {
      const node = new Node(value);
      if (this.root == null) {
        this.root = node;
        return;
      }
      this.insert(this.root, node);
    });
  }
  insert(parent, child) {
    if (parent.data > child.data) {
      parent.left === null
        ? (parent.left = child)
        : this.insert(parent.left, child);
      return;
    }
    parent.right === null
      ? (parent.right = child)
      : this.insert(parent.right, child);
  }
}

const tree1 = new TreeList([4, 5, 1, 2, 3, 6]);
console.log(tree1);

