/**
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 *
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 *
 * # Possible conditions for subtree:
 *   - one side has a node, the other side does not have a node => the structure is different, so it is different.
 *   - both left and right side not have node => it is same subtree
 *   - both left and right side have node => comparison subtree
 *
 * @param {(TreeNode | null)} p
 * @param {(TreeNode | null)} q
 * @return {boolean}
 */
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;

  return (
    p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  );
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

export default isSameTree;
