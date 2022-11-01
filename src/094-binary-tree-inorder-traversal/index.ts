/**
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 *
 * @param {(TreeNode | null)} root
 * @return {number[]}
 */
function inorderTraversal(root: TreeNode | null): number[] {
  const stack = [];
  const output = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      output.push(root.val);
      root = root.right;
    }
  }

  return output;
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

export default inorderTraversal;
