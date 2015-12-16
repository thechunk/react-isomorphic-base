'use strict';

require('babel-register')({
	presets: ['es2015', 'react'],
	only: ['@tanepiper', 'app'],
	extensions: ['.jsx', '.js']
});
var server = require('./app/server');
