/**
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 *
 * @param {(ListNode | null)} head
 * @return {(ListNode | null)}
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  let current: ListNode = head;

  while (current.next !== null) {
    if (current.val == current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export default deleteDuplicates;
