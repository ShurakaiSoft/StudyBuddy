/**
 * This script is designed to be run with node from the command line
 */

// dependencies
var	bookshelf = require('./content/bookshelf'),
	selector = require('./lib/selector'),
	random = require('./lib/random'),
	topics = require('./lib/topics');


// wire all dependencies together to create the application
var topicList, topicsAddedCount;

topicList = selector.create(random.randomNumberGenerator);
topicsAddedCount = topicList.add(topics.getTopicsFromBooks(bookshelf, topicList.createTopic));

console.log("Added", topicsAddedCount, "from bookshelf");
console.log("You should study:", topicList.choose() || 'Warning: no topics available!');
