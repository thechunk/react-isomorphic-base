'use strict';

require('babel-register')({
	presets: ['es2015', 'react'],
	only: ['quorra/lib', 'app'],
	extensions: ['.jsx', '.js']
});
var server = require('./app/server');
