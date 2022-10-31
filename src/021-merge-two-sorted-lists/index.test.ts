import mergeTwoLists, { ListNode } from './index.js';

describe('021. Merge Two Sorted Lists', () => {
  it('should pass test case - 01', () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    const result = mergeTwoLists(list1, list2);
    expect(result).toEqual(
      new ListNode(
        1,
        new ListNode(
          1,
          new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))),
        ),
      ),
    );
  });

  it('should pass test case - 02', () => {
    const list1 = new ListNode();
    const list2 = new ListNode();
    const result = mergeTwoLists(list1, list2);
    expect(result).toEqual(new ListNode(0, new ListNode(0)));
  });

  it('should pass test case - 03', () => {
    const list1 = new ListNode();
    const list2 = new ListNode(0);
    const result = mergeTwoLists(list1, list2);
    expect(result).toEqual(new ListNode(0, new ListNode(0)));
  });
});
