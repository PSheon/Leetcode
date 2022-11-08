/**
 * Given the root of a binary tree, return the sum of all left leaves.
 *
 * A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.
 *
 * @param {(TreeNode | null)} root
 * @return {number}
 */
function sumOfLeftLeaves(root: TreeNode | null): number {
  if (root == null) return 0;

  let sum = sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);

  if (
    root.left !== null &&
    root.left.left === null &&
    root.left.right === null
  ) {
    sum += root.left.val;
  }

  return sum;
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

export default sumOfLeftLeaves;
