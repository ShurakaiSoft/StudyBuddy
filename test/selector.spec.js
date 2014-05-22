/**
 * Unit tests for the StudyBuddy selector engine.
 */

// dependencies
var should = require('should');

var selector = require('../lib/selector');

describe("Selector module", function () {
	var mockTopics, topics, mockRandom;

	beforeEach(function () {
		mockRandom = function () {
			return 1;
		};
		topics = selector.create(mockRandom);
		mockTopics = [
			{ weighting: 0.5, title: "First Topic" },
			{ weighting: 2, title: "Second Topic" },
			{ weighting: 1, title: "Third Topic" }
		];
	});
	describe("addTopcis", function () {
		it("should exist", function () {
			topics.add.should.be.a.Function;
		});
		it("should return the number of topics added", function () {
			topics.add(mockTopics).should.equal(3);
		});
	});
	describe("chooseTopic", function () {
		it("should exist", function () {
			topics.choose.should.be.a.Function;
		});
		it("should return a string that matches one of the above topics", function () {
			topics.add(mockTopics);
			topics.choose().should.equal(mockTopics[1].title);
		});
		it("should return an empty string when the topic list is empty", function () {
			topics.choose().should.equal('');
		});
	});
});