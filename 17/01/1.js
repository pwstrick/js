class Node {
  constructor(key = null) {
    this.next = null;
    this.key = key;
  }
}
class List {
  constructor() {
    this.header = new Node(); //头结点
  }
  add(node) {
    //插入
    if (!this.header.next) {
      this.header.next = node;
      return;
    }
    let current = this.header;
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }
  traverse() {
    //遍历
    let current = this.header.next;
    while (current) {
      console.log(current.key);
      current = current.next;
    }
  }
  del(node) {
    //删除
    let current = this.header.next, //当前结点
      prev = this.header; //前驱结点
    while (current != node) {
      current = current.next;
      prev = prev.next;
    }
    if (current) {
      prev.next = current.next;
      current.next = null;
    }
  }
}

const list = new List();
const node1 = new Node(1),
  node2 = new Node(2),
  node3 = new Node(3);
list.add(node1);
list.add(node2);
list.add(node3);
list.traverse();
console.log("---删除---");
list.del(node2);
list.traverse();
