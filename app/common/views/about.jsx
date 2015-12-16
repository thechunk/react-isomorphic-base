'use strict';

import React from 'react';
import { Link } from 'react-router';
import Layout from './layout';

class About extends React.Component {
	render() {
		return (
			<div>
				<p>About</p>
				<div>
					<Link to="/">Home</Link>
				</div>
			</div>
		);
	}
}

export default About;
