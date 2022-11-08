/**
 * Given a string s, reverse only all the vowels in the string and return it.
 *
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 *
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s: string): string {
  const sArray: string[] = s.split('');
  let frontFlag = 0;
  let rearFlag = s.length - 1;

  const isVowel = (char: string): boolean => /[aeiouAEIOU]/gim.test(char);

  while (frontFlag < rearFlag) {
    if (isVowel(sArray[frontFlag]) && isVowel(sArray[rearFlag])) {
      [sArray[frontFlag++], sArray[rearFlag--]] = [
        sArray[rearFlag],
        sArray[frontFlag],
      ];
    } else if (isVowel(sArray[frontFlag])) {
      rearFlag--;
    } else {
      frontFlag++;
    }
  }

  return sArray.join('');
}

export default reverseVowels;
