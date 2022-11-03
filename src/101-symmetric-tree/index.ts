/**
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 *
 * @param {(TreeNode | null)} root
 * @return {boolean}
 */
function isSymmetric(root: TreeNode | null): boolean {
  const orderTraversal = (root: TreeNode | null, order: boolean): number[] => {
    const stack = [];
    const output = [];

    while (root || stack.length) {
      if (root) {
        stack.push(root);
        output.push(null);
        root = order ? root.left : root.right;
      } else {
        root = stack.pop();
        output.push(root.val);
        root = order ? root.right : root.left;
      }
    }

    return output;
  };

  const leftTable = orderTraversal(root.left, true);
  const rightTable = orderTraversal(root.right, false);

  if (leftTable.length !== rightTable.length) return false;

  for (let i = 0; i < leftTable.length; i++) {
    if (leftTable[i] !== rightTable[i]) return false;
  }

  return true;
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

export default isSymmetric;
