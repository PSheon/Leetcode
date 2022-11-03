import hasPathSum, { TreeNode } from './index.js';

describe('112. Path Sum', () => {
  it('should pass test case - 01', () => {
    const result = hasPathSum(
      new TreeNode(
        5,
        new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
        new TreeNode(
          8,
          new TreeNode(13),
          new TreeNode(4, null, new TreeNode(1)),
        ),
      ),
      22,
    );
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = hasPathSum(
      new TreeNode(1, new TreeNode(2), new TreeNode(3)),
      5,
    );
    expect(result).toEqual(false);
  });
});
