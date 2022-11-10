import findMode, { TreeNode } from './index.js';

describe('501. Find Mode in Binary Search Tree', () => {
  it('should pass test case - 01', () => {
    const result = findMode(
      new TreeNode(1, null, new TreeNode(2, new TreeNode(2))),
    );
    expect(result).toEqual([2]);
  });

  it('should pass test case - 02', () => {
    const result = findMode(new TreeNode(0));
    expect(result).toEqual([0]);
  });
});
