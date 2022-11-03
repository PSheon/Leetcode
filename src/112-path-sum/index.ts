/**
 * Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
 *
 * A leaf is a node with no children.
 *
 * # Using DFS
 *
 * @param {(TreeNode | null)} root
 * @param {number} targetSum
 * @return {boolean}
 */
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  const dfs = (root: TreeNode | null, currentSum: number): boolean => {
    if (root === null) return false;

    currentSum += root.val;

    if (root.left === null && root.right === null)
      return currentSum === targetSum;

    return dfs(root.left, currentSum) || dfs(root.right, currentSum);
  };

  return dfs(root, 0);
}

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export default hasPathSum;
