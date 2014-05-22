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
		var count = 0;

		if (topics) {
			topics.map(function (e) {
				all.push(e);
				count++;
			});
		}
		return count;
	}

	function choose() {
		if (all.length > 0) {
			return all[rand(all.length)].title;
		} else {
			return '';
		}
	}

	return {
		add: add,
		choose: choose
	};
}

module.exports = {
	create: create
}

