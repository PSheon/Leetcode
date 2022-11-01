import inorderTraversal, { TreeNode } from './index.js';

describe('094. Binary Tree Inorder Traversal', () => {
  it('should pass test case - 01', () => {
    const result = inorderTraversal(
      new TreeNode(1, null, new TreeNode(2, new TreeNode(3))),
    );
    expect(result).toEqual([1, 3, 2]);
  });

  it('should pass test case - 02', () => {
    const result = inorderTraversal(new TreeNode());
    expect(result).toEqual([0]);
  });

  it('should pass test case - 03', () => {
    const result = inorderTraversal(new TreeNode(1));
    expect(result).toEqual([1]);
  });
});
