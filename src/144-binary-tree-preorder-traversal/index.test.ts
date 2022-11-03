import preorderTraversal, { TreeNode } from './index.js';

describe('144. Binary Tree Preorder Traversal', () => {
  it('should pass test case - 01', () => {
    const result = preorderTraversal(
      new TreeNode(1, null, new TreeNode(2, new TreeNode(3))),
    );
    expect(result).toEqual([1, 2, 3]);
  });

  it('should pass test case - 02', () => {
    const result = preorderTraversal(null);
    expect(result).toEqual([]);
  });

  it('should pass test case - 03', () => {
    const result = preorderTraversal(new TreeNode(1));
    expect(result).toEqual([1]);
  });
});
