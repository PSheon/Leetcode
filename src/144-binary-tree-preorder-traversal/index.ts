/**
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 *
 * @param {(TreeNode | null)} root
 * @return {number[]}
 */
function preorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return [];

  let output = [root.val];
  output = output.concat(preorderTraversal(root.left));
  output = output.concat(preorderTraversal(root.right));

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

export default preorderTraversal;
