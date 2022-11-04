/**
 * Given a pattern and a string s, find if s follows the same pattern.
 *
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
function wordPattern(pattern: string, s: string): boolean {
  const pTable: Record<string, string> = {};
  const sTable: Record<string, string> = {};
  const sList: string[] = s.split(' ');
  let output = true;

  if (pattern.length !== sList.length) return false;

  for (let i = 0; i < s.length; i++) {
    const pChar = pattern.charAt(i);
    const sItem = sList[i];

    if (!pTable[pChar]) {
      pTable[pChar] = sItem;
    } else if (pTable[pChar] !== sItem) {
      output = false;
      break;
    }

    if (!sTable[sItem]) {
      sTable[sItem] = pChar;
    } else if (sTable[sItem] !== pChar) {
      output = false;
      break;
    }
  }

  return output;
}

export default wordPattern;
