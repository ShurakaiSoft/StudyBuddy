/**
 * This script is designed to be run with node from the command line
 */

var bookshelf = require('./bookshelf');



/**
 * Given a whole bookshelf it will return a string indicating the book along with
 * it's chapter and section.
 *
 * @param  {Array} bookshelf 	of Book objects
 * @return {Object}          	a randomly selected book Object
 */
function chapterSelector(bookshelf) {
	var book;

	/**
	 * Generate a random integer number from 0 to size - 1.
	 *
	 * @param  {Number} size Upper bound of number generator, Exclusive
	 * @return {Number}      Random Integer number
	 */
	function randomNumber(size) {
		return Math.floor(Math.random() * size);
	}

	/**
	 * Ramdomly returns a book object from the bookshelf
	 * @param  {Array} bookshelf  An array of Book objects
	 * @return {Object, Book}     Randomly chosen Book object
	 */
	function getABook(bookshelf) {
		return bookshelf[randomNumber(bookshelf.length)];
	}

	/**
	 * Randomly return a chapter and section from the given book.
	 * @param {Object, Book} book   A book object
	 * @return {String} 			indicating chapter and section
	 */
	function getAChapterAndSection(book) {
		var chapters = book.chapters.length;
		var chapter = randomNumber(chapters);
		return '' + (chapter + 1) + '.' + (randomNumber(book.chapters[chapter]) + 1);
	}

	book = getABook(bookshelf);
	return 	book.title + ', chapter ' + getAChapterAndSection(book);
}

console.log("You should study", chapterSelector(bookshelf));
