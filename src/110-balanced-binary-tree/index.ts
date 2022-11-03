/**
 * Given a binary tree, determine if it is height-balanced.
 *
 * @param {(TreeNode | null)} root
 * @return {boolean}
 */
function isBalanced(root: TreeNode | null): boolean {
  const check = (root: TreeNode): number => {
    if (root === null) return 0;

    const left = check(root.left);
    const right = check(root.right);

    if (left === -1 || right == -1 || Math.abs(left - right) > 1) {
      return -1;
    }
    return 1 + Math.max(left, right);
  };

  return check(root) != -1;
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

export default isBalanced;
