import isSymmetric, { TreeNode } from './index.js';

describe('101. Symmetric Tree', () => {
  it('should pass test case - 01', () => {
    const result = isSymmetric(
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(3), new TreeNode(4)),
        new TreeNode(2, new TreeNode(4), new TreeNode(3)),
      ),
    );
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = isSymmetric(
      new TreeNode(
        1,
        new TreeNode(2, null, new TreeNode(3)),
        new TreeNode(2, null, new TreeNode(3)),
      ),
    );
    expect(result).toEqual(false);
  });
});
