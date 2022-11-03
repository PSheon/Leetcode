import postorderTraversal, { TreeNode } from './index.js';

describe('145. Binary Tree Postorder Traversal', () => {
  it('should pass test case - 01', () => {
    const result = postorderTraversal(
      new TreeNode(1, null, new TreeNode(2, new TreeNode(3))),
    );
    expect(result).toEqual([3, 2, 1]);
  });

  it('should pass test case - 02', () => {
    const result = postorderTraversal(null);
    expect(result).toEqual([]);
  });

  it('should pass test case - 03', () => {
    const result = postorderTraversal(new TreeNode(1));
    expect(result).toEqual([1]);
  });
});
