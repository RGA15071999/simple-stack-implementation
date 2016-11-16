class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  length() {
    let pointer = this.next;
    let count = 1;
    while(pointer !== null) {
      count++;
      pointer = pointer.next;
    }
    return count;
  }

  append(element) {
    let pointer = this;
    while(pointer.next !== null) {
      pointer = pointer.next;
    }
    let new_node = new Node(element);
    pointer.next = new_node;
  }

  prepend(element) {
    let new_element = new Node(this.data);
    new_element.next = this.next;
    this.data = element;
    this.next = new_element;
  }

  get(index) {
    let pointer = this;
    let currentIndex = 0;
    while(pointer.next !== null) {
      if(currentIndex === index) {
        return pointer.data
      }
      pointer = pointer.next;
      currentIndex++;
    }
  }
};

class Stack {
  constructor() {
    this.arr = new Node();
  }

  push(elem) {
    if(this.arr.length() > 1)
      this.arr.append(elem);
  }

  pop() {
    const length = this.arr.length()
    const a = this.arr.get(length - 1);
    if(a === undefined) {
      throw new Error("Popping from an empty stack");
    }
    return a;
  }
}

const stack = new Stack;
stack.push(1);
console.log(stack.arr);
