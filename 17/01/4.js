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
  findLast(n) {
    //链表倒数第 n 个结点
    let slow = null,     //慢指针
      fast = null;       //快指针
    slow = fast = this.header.next;
    let i = 0;
    //前移 n 步
    while (i < n && fast) {
      fast = fast.next;
	    i++;
    }
    while (fast) {
      fast = fast.next;
      slow = slow.next;
    }
    return slow.key;
  }
}

const list = new List();
const node1 = new Node(1),
  node2 = new Node(2),
  node3 = new Node(3),
  node4 = new Node(4),
  node5 = new Node(5);
list.add(node1);
list.add(node2);
list.add(node3);
list.add(node4);
list.add(node5);
list.traverse();
console.log("倒数第一", list.findLast(1));
console.log("倒数第二", list.findLast(2));
