'use strict';

import React from 'react';
import { Link } from 'react-router';

class Item extends React.Component {
	render() {
		return (
			<li>
				<Link to={`/item/${ this.props.itemId }`}>
					Item { this.props.itemId }
				</Link>
			</li>
		);
	}
}

export default Item;
