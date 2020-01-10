class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(arr);
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    let currentNode = this.head;
    let previousNode = null;

    const newNode = new Node(value);

    for (let i = 0; i < this.length; i++) {
      if (i === index) {
        newNode.next = currentNode;

        if (previousNode) {
          previousNode.next = newNode;
        } else {
          this.head = newNode;
        }

        this.length++;
        return this;
      } else {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  }

  reverse() {
    if (this.length === 1) {
      return this;
    }

    let previousNode = this.head;
    let currentNode = previousNode.next;
    previousNode.next = null;
    this.tail = previousNode;

    let hold;
    while (currentNode) {
      hold = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = hold;
    }
    this.head = previousNode;
    return this;
  }
}

const myLinkedList = new Linkedlist(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.prepend(5);
myLinkedList.insert(0, 3);
myLinkedList.insert(2, 7);
myLinkedList.printList();

class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      previous: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value,
      previous: null,
      next: null
    };
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(arr);
  }
}

const double = new DoubleLinkedList(100);
double.append(2);
double.printList();
