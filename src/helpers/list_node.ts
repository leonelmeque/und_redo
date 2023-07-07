export class ListNode<T> {
  val: T;
  next: null | ListNode<T>;
  prev: null | ListNode<T>;

  constructor(val: T) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
