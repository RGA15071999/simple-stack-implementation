'use strict';

class Stack {

  constructor() {
    this.arr = [];
  }

  push(elem) {
    this.arr.push(elem);
  }

  pop() {
    const a = this.arr.pop();
    if(a === undefined) {
      throw new Error("Popping from an empty stack");
    }
    return a;
  }
}

const stack = new Stack;
console.log(stack.pop())
