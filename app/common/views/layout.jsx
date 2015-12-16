'use strict';

import React from 'react';

class Layout extends React.Component {
	render() {
		return (
			<html>
				<head>
					<meta charSet="UTF-8" />
					<title></title>
				</head>
				<body>
					<div id="container" dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
					<script src="/public/js/app.js"></script>
				</body>
			</html>
		);
	}
}

export default Layout;
