import deleteDuplicates, { ListNode } from './index.js';

describe('083. Remove Duplicates from Sorted List', () => {
  it('should pass test case - 01', () => {
    const result = deleteDuplicates(
      new ListNode(1, new ListNode(1, new ListNode(2))),
    );
    expect(result).toEqual(new ListNode(1, new ListNode(2)));
  });

  it('should pass test case - 02', () => {
    const result = deleteDuplicates(
      new ListNode(
        1,
        new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))),
      ),
    );
    expect(result).toEqual(new ListNode(1, new ListNode(2, new ListNode(3))));
  });
});
