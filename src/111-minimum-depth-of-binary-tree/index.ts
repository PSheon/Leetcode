/**
 * Given a binary tree, find its minimum depth.
 *
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 *
 * Note: A leaf is a node with no children.
 *
 * @param {(TreeNode | null)} root
 * @return {number}
 */
function minDepth(root: TreeNode | null): number {
  if (root === null) return 0;

  const left = minDepth(root.left);
  const right = minDepth(root.right);

  if (left === 0 || right === 0) {
    return left + right + 1;
  } else {
    return Math.min(left, right) + 1;
  }
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

export default minDepth;
