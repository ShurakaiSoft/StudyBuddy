/**
 * Book loader
 *
 */


 /**
  * Indexes an array of book objects.
  *
  * @param  {Array} bookshelf	of book objects
  * @return {Array}         	of topic objects
  */
 function getTopics(bookshelf) {
 	var topics = [];
 	bookshelf.map(function (elem) {
 		var title = elem.title;
 		elem.chapters.map(function (elem, index) {
 			var chapter = index + 1;
 			var i = 0;
 			for (i = 0; i <= elem; i++)	{
 				// XXX: this object format is required by the selector engine
 				topics.push({
 					weighting: 1,
 					title: title + ' chapter ' + chapter + '.' + (i + 1)
 				});
 			}
 		});
 	});
 	return topics;
 }

 module.exports = {
 	getTopics: getTopics
 }



