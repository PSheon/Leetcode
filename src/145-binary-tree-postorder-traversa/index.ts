/**
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
 *
 * @param {(TreeNode | null)} root
 * @return {number[]}
 */
function postorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return [];

  let output = [];
  output = output.concat(postorderTraversal(root.left));
  output = output.concat(postorderTraversal(root.right));
  output = output.concat([root.val]);

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

export default postorderTraversal;
