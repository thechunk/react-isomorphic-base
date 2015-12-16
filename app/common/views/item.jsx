'use strict';

import React from 'react';
import { Link } from 'react-router';

class Item extends React.Component {
	constructor(props) {
		super(props);
		this.state = Object.assign({}, props);
	}

	render() {
		return (
			<div>
				<p>Item {this.state.params.id}</p>
				<div>
					<Link to="/">Home</Link>
				</div>
			</div>
		);
	}
}

export default Item;
