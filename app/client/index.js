'use strict';

import React from 'react';
import { render } from 'react-dom';
import Router from 'react-router';
import { createHistory } from 'history';

import Index from '../common/views/index';
import Routes from '../common/config/routes';

render((
	<Router history={createHistory()} routes={Routes} />
), document.getElementById('container'));
