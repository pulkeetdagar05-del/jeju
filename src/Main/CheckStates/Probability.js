/**
 * The probability that a GC or reindeer has NOT spawned
 */
let chanceTotal = 1.0;
let chanceTotalDeer = 1.0;

export function resetChanceTotal() {
  chanceTotal = 1.0;
}

export function resetChanceTotalDeer() {
  chanceTotalDeer = 1.0;
}

/**
 * Update the probability that a cookie has not spawned
 * @param {number} chanceToSpawn The probablity that a GC appears
 * @returns the cumulative probability that a GC has appeared from beginning to now
 */
export function updateChanceTotal(chanceToSpawn) {
  chanceTotal *= 1 - chanceToSpawn;
  return 1 - chanceTotal;
}

/**
 * Update the probability that a reindeer has not spawned
 * @param {number} chanceToSpawn The probablity that a reindeer appears
 * @returns the cumulative probability that a reindeer has appeared from beginning to now
 */
export function updateChanceTotalDeer(chanceToSpawn) {
  chanceTotalDeer *= 1 - chanceToSpawn;
  return 1 - chanceTotalDeer;
}
