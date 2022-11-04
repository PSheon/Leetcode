/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 *
 * @param {(ListNode | null)} head
 * @return {(ListNode | null)}
 */
function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  const stack: number[] = [];
  let flag: ListNode = null;
  let current: ListNode = head;

  while (current !== null) {
    stack.push(current.val);

    current = current.next;
  }

  flag = new ListNode(stack.pop());
  current = flag;

  while (stack.length) {
    current.next = new ListNode(stack.pop());
    current = current.next;
  }

  return flag;
}

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export default reverseList;
