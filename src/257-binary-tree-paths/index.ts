/**
 * Given the root of a binary tree, return all root-to-leaf paths in any order.
 *
 * A leaf is a node with no children.
 *
 * @param {(TreeNode | null)} root
 * @return {string[]}
 */
function binaryTreePaths(root: TreeNode | null): string[] {
  if (root === null) return [];

  const output: string[] = [];

  const travel = (node: TreeNode | null, currentString: string): void => {
    if (node.right == null && node.left == null) {
      output.push(currentString + node.val);
    } else {
      if (node.left != null) {
        travel(node.left, currentString + node.val + '->');
      }
      if (node.right != null) {
        travel(node.right, currentString + node.val + '->');
      }
    }
  };

  travel(root, '');
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

export default binaryTreePaths;
