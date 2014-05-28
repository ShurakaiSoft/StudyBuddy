/**
 * Selector engine module
 */


/**
 * Create a new selector
 *
 * Don't use new with this function.
 *
 * @return {[type]} [description]
 */
function create(rand) {
	var	rand = rand,
		all = [];

	function add(topics) {
		var size;

		if (topics && topics.length) {
			size = topics.length;
			all = all.concat(topics);
			return size;
		}
		return 0;
	}

	/*
	 * return a topic object
	 */
	function choose() {
		if (all.length > 0) {
			return all[rand(all.length)];
		} else {
			return '';
		}
	}

	function createTopic(weighting, title) {
		return { weighting: weighting, title: title };
	}

	return {
		add: add,
		choose: choose,
		createTopic: createTopic
	};
}

module.exports = {
	create: create
}

