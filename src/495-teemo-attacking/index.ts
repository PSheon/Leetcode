/**
 * Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack.
 *
 * You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.
 *
 * Return the total number of seconds that Ashe is poisoned.
 *
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let output = 0;

  for (let i = 0; i < timeSeries.length - 1; i++) {
    if (timeSeries[i] + duration < timeSeries[i + 1]) {
      output += duration;
    } else {
      output += timeSeries[i + 1] - timeSeries[i];
    }
  }

  output += duration;

  return output;
}

export default findPoisonedDuration;
