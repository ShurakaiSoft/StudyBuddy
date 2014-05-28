/**
 * Topic Generators. Methods to generate Topic Lists from different input
 * sources.
 *
 */

/**
 * Indexes an array of book objects.
 *
 * @param  {Array} bookshelf	of book objects
 * @param  {function} create	a function to create a topic object
 * @return {Array}         	of topic objects
 */
function getTopicsFromBooks(bookshelf, create) {
	var topics = [];
	bookshelf.map(function (elem) {
		var title = elem.title;
		elem.chapters.map(function (elem, index) {
			var chapter = index + 1;
			var i = 0;
			for (i = 0; i <= elem; i++)	{
				topics.push(create(1, '"' + title + '", chapter ' + chapter + '.' + (i + 1)));
			}
		});
	});
	return topics;
}

/**
 * Public API
 */
module.exports = {
	getTopicsFromBooks: getTopicsFromBooks
}
