/**
 * Given a string s, return the number of segments in the string.
 *
 * A segment is defined to be a contiguous sequence of non-space characters.
 *
 * @param {string} s
 * @return {number}
 */
function countSegments(s: string): number {
  const list: string[] = s.split(' ').filter((item) => item !== '');

  return list.length;
}

export default countSegments;
