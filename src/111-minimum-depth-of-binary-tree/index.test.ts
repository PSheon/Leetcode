import minDepth, { TreeNode } from './index.js';

describe('111. Minimum Depth of Binary Tree', () => {
  it('should pass test case - 01', () => {
    const result = minDepth(
      new TreeNode(
        3,
        new TreeNode(9),
        new TreeNode(20, new TreeNode(15), new TreeNode(7)),
      ),
    );
    expect(result).toEqual(2);
  });

  it('should pass test case - 02', () => {
    const result = minDepth(
      new TreeNode(
        2,
        null,
        new TreeNode(
          3,
          null,
          new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6))),
        ),
      ),
    );
    expect(result).toEqual(5);
  });
});
