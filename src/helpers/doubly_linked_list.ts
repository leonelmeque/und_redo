import { ListNode } from "./list_node";

export class DoublyLinkedList<T> {
  root: null | ListNode<T>;
  tail: null | ListNode<T>;
  length: number;

  constructor() {
    this.root = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: T) {
    const node = new ListNode<T>(val);

    if (this.length === 0) {
      this.root = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      (this.tail as ListNode<T>).next = node;
      this.tail = node;
    }

    this.length++;

    return node;
  }

  unshift(val: T) {
    const node = new ListNode<T>(val);

    if (this.length === 0) return this.push(val);
    (this.root as ListNode<T>).prev = node;
    node.next = this.root;
    this.root = node;

    this.length++;
    return node;
  }

  pop() {
    let node = this.tail;
    if (this.root === null || this.tail === null) return node;
    if (this.length === 1) {
      this.root = null;
      this.tail = null;
    } else {
      this.tail = (node as ListNode<T>).prev;
      if (this.tail !== null) {
        this.tail.next = null;
      }
    }

    (node as ListNode<T>).prev = null;

    this.length--;

    return node;
  }

  reset() {
    const aux = this.length;
    for (let i = 0; i < aux; i++) {
      this.pop();
    }
  }

  getLength() {
    return this.length;
  }

  print() {
    const arr: T[] = [];
    let current = this.root;

    while (current !== null) {
      arr.push(current.val);
      current = current.next;
    }

    return arr;
  }
}
