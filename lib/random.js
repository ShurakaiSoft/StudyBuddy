/**
 * A Random number generator module.
 */

/**
 * Generates a random number between 0 and 1 less than size. All returned numbers
 * are integers.
 *
 * @param  {Number} size	of the random number
 * @return {Number} 		a random integer
 */
function randomNumberGenerator(size) {
	return Math.floor(Math.random() * size);
}

// public API
module.exports = {
	randomNumberGenerator: randomNumberGenerator
};