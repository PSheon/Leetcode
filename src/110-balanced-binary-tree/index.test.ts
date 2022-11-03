import isBalanced, { TreeNode } from './index.js';

describe('110. Balanced Binary Tree', () => {
  it('should pass test case - 01', () => {
    const result = isBalanced(
      new TreeNode(
        3,
        new TreeNode(9),
        new TreeNode(20, new TreeNode(15), new TreeNode(7)),
      ),
    );
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = isBalanced(
      new TreeNode(
        3,
        new TreeNode(
          2,
          new TreeNode(3, new TreeNode(4), new TreeNode(3)),
          new TreeNode(3),
        ),
        new TreeNode(2),
      ),
    );
    expect(result).toEqual(false);
  });
});
