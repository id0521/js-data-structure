class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.bottom = this.top = newNode;
    } else {
      const hold = this.top;
      this.top = newNode;
      this.top.next = hold;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }

    const popped = this.top;

    if (this.length === 1) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--;
    return popped;
  }

  isEmpty() {
    return this.length === 0;
  }
}

class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    return this.array.push(value);
  }

  pop() {
    return this.array.pop();
  }

  isEmpty() {
    return this.array.length === 0;
  }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(100);
myStack.push(900);
myStack.pop();
