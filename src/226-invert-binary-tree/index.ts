/**
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * @param {(TreeNode | null)} root
 * @return {(TreeNode | null)}
 */
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;
  if (root.left === null && root.right === null) return root;

  const tempTreeNode = root.left as TreeNode;
  root.left = invertTree(root.right);
  root.right = invertTree(tempTreeNode);

  return root;
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

export default invertTree;
