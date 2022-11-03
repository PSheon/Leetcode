import maxDepth, { TreeNode } from './index.js';

describe('104. Maximum Depth of Binary Tree', () => {
  it('should pass test case - 01', () => {
    const result = maxDepth(
      new TreeNode(
        3,
        new TreeNode(9),
        new TreeNode(20, new TreeNode(15), new TreeNode(7)),
      ),
    );
    expect(result).toEqual(3);
  });

  it('should pass test case - 02', () => {
    const result = maxDepth(new TreeNode(1, null, new TreeNode(2)));
    expect(result).toEqual(2);
  });
});
