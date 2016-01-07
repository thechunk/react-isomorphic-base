'use strict';

import Hapi from 'hapi';
import Vision from 'vision';
import Inert from 'inert';
import Quorra from '@tanepiper/quorra'
import Good from 'good';
import GoodConsole from 'good-console'

import Items from '../common/controllers/items';

var server = new Hapi.Server();
server.connection({
	host: '0.0.0.0',
	port: 3000
});

const goodOpts = {
	reporters: [{
		reporter: GoodConsole,
		events: { log: '*', response: '*' }
	}]
};
server.register([{
		register: Good,
		options: goodOpts
	}, {
		register: Vision
	}, {
		register: Inert
	}, {
		register: Quorra
	}
], (err) => {
	if (err) {
		server.log('error', 'Failed to load vision.');
	}

	server.method({
		name: 'getItems',
		method: (req) => {
			return { items: Items.all() };
		}
	})

	server.method({
		name: 'getItem',
		method: (req, props) => {
			return { item: Items.get(props.params.id) };
		}
	})

	server.route({
		method: 'GET',
		path: '/{route*}',
		handler: {
			react: {
				relativeTo: `${__dirname}/..`,
				router: 'common/config/routes.js',
				layout: 'common/views/layout.jsx',
				props: {
					// TODO: support dynamic routes
					'/': 'getItems',
					'/item/:id': 'getItem'
				}
			}
		}
	});

	server.route({
		method: 'GET',
		path: '/public/{param*}',
		handler: {
			directory: {
				path: 'public'
			}
		}
	});

	server.route({
		method: ['GET'],
		path: '/api/{version}/{route}',
		handler: (req, reply) => {
			if (req.params.version === 'v1') {
				switch (req.params.route) {
					case 'items':
						return reply(server.methods.getItems());
				}
			}
		}
	})

	server.start((err) => {
		if (err) {
			throw err;
		}

		server.log('info', 'Server is listening at ' + server.info.uri);
	});
});

export default server;
