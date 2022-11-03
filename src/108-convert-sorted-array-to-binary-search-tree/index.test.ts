import sortedArrayToBST, { TreeNode } from './index.js';

describe('108. Convert Sorted Array to Binary Search Tree', () => {
  it('should pass test case - 01', () => {
    const result = sortedArrayToBST([-10, -3, 0, 5, 9]);
    expect(result).toEqual(
      new TreeNode(
        0,
        new TreeNode(-3, new TreeNode(-10)),
        new TreeNode(9, new TreeNode(5)),
      ),
    );
  });

  it('should pass test case - 02', () => {
    const result = sortedArrayToBST([1, 3]);
    expect(result).toEqual(new TreeNode(3, new TreeNode(1)));
  });
});
