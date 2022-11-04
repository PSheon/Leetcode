import binaryTreePaths, { TreeNode } from './index.js';

describe('257. Binary Tree Paths', () => {
  it('should pass test case - 01', () => {
    const result = binaryTreePaths(
      new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3)),
    );
    expect(result).toEqual(['1->2->5', '1->3']);
  });

  it('should pass test case - 02', () => {
    const result = binaryTreePaths(new TreeNode(1));
    expect(result).toEqual(['1']);
  });

  it('should pass test case - 03', () => {
    const result = binaryTreePaths(new TreeNode(1, new TreeNode(3)));
    expect(result).toEqual(['1->3']);
  });
});
