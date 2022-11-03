/**
 * Given an integer array numbers where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
 *
 * # Find middle item be new root, left side middle and right side middle be new root.
 *
 * @param {number[]} numbers
 * @return {(TreeNode | null)}
 */
function sortedArrayToBST(numbers: number[]): TreeNode | null {
  if (numbers.length === 0) return null;
  if (numbers.length === 1) return new TreeNode(numbers[0]);

  const midIndex = Math.floor(numbers.length / 2);
  const root = new TreeNode(numbers[midIndex]);
  root.left = sortedArrayToBST(numbers.slice(0, midIndex));
  root.right = sortedArrayToBST(numbers.slice(midIndex + 1));

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

export default sortedArrayToBST;
