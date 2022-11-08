import sumOfLeftLeaves, { TreeNode } from './index.js';

describe('404. Sum of Left Leaves', () => {
  it('should pass test case - 01', () => {
    const result = sumOfLeftLeaves(
      new TreeNode(
        3,
        new TreeNode(9),
        new TreeNode(20, new TreeNode(15), new TreeNode(7)),
      ),
    );
    expect(result).toEqual(24);
  });

  it('should pass test case - 02', () => {
    const result = sumOfLeftLeaves(new TreeNode(1));
    expect(result).toEqual(0);
  });
});
