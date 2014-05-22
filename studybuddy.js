/**
 * This script is designed to be run with node from the command line
 */

// dependencies
var	bookshelf = require('./topics/bookshelf'),
	selector = require('./lib/selector'),
	random = require('./lib/random'),
	books = require('./topics/books');


// wire all dependencies together to create the application
var topics, topic;

topics = selector.create(random.randomNumberGenerator);
topics.add(books.getTopics(bookshelf));
topic = topics.choose();

console.log("You should study", topic || 'Warning: no topics available!');
