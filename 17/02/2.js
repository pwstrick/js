class CircularQueue {
  constructor(capacity) {
    this.items = [];
    this.n = capacity;	//队列大小
    this.head = 0;		  //队首指针
    this.tail = 0;		  //队尾指针
  }
  //入队
  enqueue(item) {
    const { head, tail, n } = this;
	  //队满
    if ((tail + 1) % n == head) return false;
    this.items[tail] = item;
	  //队尾没有存储数据，会浪费一个数组的存储空间
    this.tail = (tail + 1) % n;
    return true;
  }
  //出队
  dequeue() {
    const { head, tail, n, items } = this;
	  //队空
    if (head == tail) return null;
    const result = items[head];
    this.head = (head + 1) % n;
    return result;
  }
}

const circle = new CircularQueue(5);
circle.enqueue(1);
circle.enqueue(2);
circle.enqueue(3);
circle.enqueue(4);
console.log(circle.enqueue(5));
console.log("---出队---");
console.log(circle.dequeue());
console.log(circle.dequeue());
console.log(circle.dequeue());
console.log(circle.dequeue());
console.log(circle.dequeue());
