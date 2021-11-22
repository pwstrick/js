class Node {
  constructor(data) {
    this.data = data;
	this.left = null;
	this.right = null;
  }
}
class Tree {
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
  preOrder(root = this.root) {
    //前序
    if (!root) {
      return;
    }
    console.log(root.data);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }
  midOrder(root = this.root) {
    //中序
    if (!root) {
      return;
    }
    this.midOrder(root.left);
    console.log(root.data);
    this.midOrder(root.right);
  }
  backOrder(root = this.root) {
    //后序
    if (!root) {
      return;
    }
    this.backOrder(root.left);
    this.backOrder(root.right);
    console.log(root.data);
  }
  levelOrder(node = this.root) {
    //层序
    let queue = [];
    queue.push(node); 				// 根节点入队
    while (queue.length) {
      node = queue.shift(); 		// 出队
      console.log(node.data); 		// 访问该节点
      if (node.left) {
        // 如果它的右子树不为空
        queue.push(node.left); 		// 将左子树的根节点入队
      }
      if (node.right) {
        // 如果它的右子树不为空
        queue.push(node.right); 	// 将右子树的根节点入队
      }
    }
  }
}


const tree1 = new Tree([4, 5, 1, 2, 3, 6]);
console.log("---前序---");
tree1.preOrder();
console.log("---中序---");
tree1.midOrder();
console.log("---后序---");
tree1.backOrder();
console.log("---层序---");
tree1.levelOrder();

