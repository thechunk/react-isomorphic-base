'use strict';

import React from 'react';
import { Link } from 'react-router';
import Item from './item';

class Items extends React.Component {
	render() {
		var itemNodes = this.props.list.map(function(v) {
			return <Item itemId={v.id} key={v.id} />;
		});
		return (
			<ul>{itemNodes}</ul>
		);
	}
}

export default Items;
