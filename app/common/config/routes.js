'use strict';

import Index from '../views/index';
import Item from '../views/item';
import About from '../views/about';

export default [{
	path: '/',
	component: Index
}, {
	path: '/item/:id',
	component: Item
}, {
	path: '/about',
	component: About
}];
