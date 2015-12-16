'use strict';

import React from 'react';
import { Link } from 'react-router';
import Layout from './layout';
import Items from '../components/items';

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = Object.assign({ items: [] }, props);
	}

	componentDidMount() {
		fetch('/api/v1/items')
			.then((data) => {
				return data.json();
			})
			.then((json) => {
				this.setState(json);
			});
	}

	render() {
		return (
			<div>
				<p>Index</p>
				<Items list={this.state.items} />
				<div>
					<Link to="/about">About</Link>
				</div>
			</div>
		);
	}
}

export default Index;
