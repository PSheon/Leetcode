import hasCycle, { ListNode } from './index.js';

describe('141. Linked List Cycle', () => {
  it('should pass test case - 01', () => {
    const node01 = new ListNode(3);
    const node02 = new ListNode(2);
    const node03 = new ListNode(0);
    const node04 = new ListNode(4);
    node01.next = node02;
    node02.next = node03;
    node03.next = node04;
    node04.next = node02;

    const result = hasCycle(node01);
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const node01 = new ListNode(1);
    const node02 = new ListNode(2);
    node01.next = node02;
    node02.next = node01;

    const result = hasCycle(node01);
    expect(result).toEqual(true);
  });

  it('should pass test case - 03', () => {
    const result = hasCycle(new ListNode(1));
    expect(result).toEqual(false);
  });
});
