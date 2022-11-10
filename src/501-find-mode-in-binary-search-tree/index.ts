/**
 * Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.
 *
 * If the tree has more than one mode, return them in any order.
 *
 * Assume a BST is defined as follows:
 *  - The left subtree of a node contains only nodes with keys less than or equal to the node's key.
 *  - The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
 *  - Both the left and right subtrees must also be binary search trees.
 *
 * @param {(TreeNode | null)} root
 * @return {number[]}
 */
function findMode(root: TreeNode | null): number[] {
  const table: Record<number, number> = {};
  const stack = [];
  let output = [];
  let maxTimes = 0;

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      if (table[root.val] > 0) {
        table[root.val]++;
      } else {
        table[root.val] = 1;
      }
      if (table[root.val] > maxTimes) {
        maxTimes = table[root.val];
      }
      root = root.right;
    }
  }

  output = Object.entries(table)
    .filter((item) => item[1] === maxTimes)
    .map((item) => parseInt(item[0]));

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

export default findMode;
