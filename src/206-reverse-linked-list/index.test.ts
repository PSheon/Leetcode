import reverseList, { ListNode } from './index.js';

describe('206. Reverse Linked List', () => {
  it('should pass test case - 01', () => {
    const result = reverseList(
      new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
      ),
    );
    expect(result).toEqual(
      new ListNode(
        5,
        new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1)))),
      ),
    );
  });

  it('should pass test case - 02', () => {
    const result = reverseList(new ListNode(1, new ListNode(2)));
    expect(result).toEqual(new ListNode(2, new ListNode(1)));
  });

  it('should pass test case - 03', () => {
    const result = reverseList(null);
    expect(result).toEqual(null);
  });
});
