'use strict';

class Items {
	static all() {
		const items = [
			{ id: 1 },
			{ id: 2 }
		];

		return items;
	}

	static get(id) {
		return { id: id };
	}
}

export default Items;
