import invertTree, { TreeNode } from './index.js';

describe('226. Invert Binary Tree', () => {
  it('should pass test case - 01', () => {
    const result = invertTree(
      new TreeNode(
        4,
        new TreeNode(2, new TreeNode(1), new TreeNode(3)),
        new TreeNode(7, new TreeNode(6), new TreeNode(9)),
      ),
    );
    expect(result).toEqual(
      new TreeNode(
        4,
        new TreeNode(7, new TreeNode(9), new TreeNode(6)),
        new TreeNode(2, new TreeNode(3), new TreeNode(1)),
      ),
    );
  });

  it('should pass test case - 02', () => {
    const result = invertTree(
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    );
    expect(result).toEqual(new TreeNode(2, new TreeNode(3), new TreeNode(1)));
  });
});
