/**
 * Given the head of a linked list and an integer target, remove all the nodes of the linked list that has Node.val == target, and return the new head.
 *
 * @param {(ListNode | null)} head
 * @param {number} target
 * @return {(ListNode | null)}
 */
function removeElements(
  head: ListNode | null,
  target: number,
): ListNode | null {
  if (head === null) return null;

  const flag = new ListNode(0);
  let output = flag;
  let current = head;

  while (current !== null) {
    if (current.val !== target) {
      output.next = new ListNode(current.val);
      output = output.next;
    }
    current = current.next;
  }

  return flag.next;
}

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export default removeElements;
