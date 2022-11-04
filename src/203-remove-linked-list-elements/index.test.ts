import removeElements, { ListNode } from './index.js';

describe('203. Remove Linked List Elements', () => {
  it('should pass test case - 01', () => {
    const result = removeElements(
      new ListNode(
        1,
        new ListNode(
          2,
          new ListNode(
            6,
            new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))),
          ),
        ),
      ),
      6,
    );
    expect(result).toEqual(
      new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
      ),
    );
  });

  it('should pass test case - 02', () => {
    const result = removeElements(null, 1);
    expect(result).toEqual(null);
  });

  it('should pass test case - 03', () => {
    const result = removeElements(
      new ListNode(7, new ListNode(7, new ListNode(7, new ListNode(7)))),
      7,
    );
    expect(result).toEqual(null);
  });
});
