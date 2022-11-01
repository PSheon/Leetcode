import isSameTree, { TreeNode } from './index.js';

describe('100. Same Tree', () => {
  it('should pass test case - 01', () => {
    const result = isSameTree(
      new TreeNode(1, new TreeNode(2), new TreeNode(3)),
      new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    );
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = isSameTree(
      new TreeNode(1, new TreeNode(2)),
      new TreeNode(1, null, new TreeNode(3)),
    );
    expect(result).toEqual(false);
  });

  it('should pass test case - 03', () => {
    const result = isSameTree(
      new TreeNode(1, new TreeNode(2), new TreeNode(3)),
      new TreeNode(1, new TreeNode(1), new TreeNode(2)),
    );
    expect(result).toEqual(false);
  });

  it('should pass test case - 04', () => {
    const result = isSameTree(
      new TreeNode(1, new TreeNode(1)),
      new TreeNode(1, null, new TreeNode(1)),
    );
    expect(result).toEqual(false);
  });
});
