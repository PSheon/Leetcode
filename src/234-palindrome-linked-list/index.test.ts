import isPalindrome, { ListNode } from './index.js';

describe('234. Palindrome Linked List', () => {
  it('should pass test case - 01', () => {
    const result = isPalindrome(
      new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1)))),
    );
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = isPalindrome(new ListNode(1, new ListNode(2)));
    expect(result).toEqual(false);
  });

  it('should pass test case - 03', () => {
    const result = isPalindrome(
      new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(1)))),
      ),
    );
    expect(result).toEqual(true);
  });

  it('should pass test case - 04', () => {
    const result = isPalindrome(
      new ListNode(
        1,
        new ListNode(5, new ListNode(3, new ListNode(2, new ListNode(1)))),
      ),
    );
    expect(result).toEqual(false);
  });
});
