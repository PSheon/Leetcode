/**
 * Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
 *
 * @param {(ListNode | null)} head
 * @return {boolean}
 */
function isPalindrome(head: ListNode | null): boolean {
  const stack: number[] = [];

  let current: ListNode = head;
  let output = true;

  while (current !== null) {
    stack.push(current.val);
    current = current.next;
  }

  for (let i = 0; i < Math.floor(stack.length / 2); i++) {
    if (stack[i] !== stack[stack.length - i - 1]) {
      output = false;
      break;
    }
  }

  return output;
}

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export default isPalindrome;
