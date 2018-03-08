import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import App from './components/app';
import reducers from './reducers';
import async from './middlewares/async';

const createStoreWithMiddleware = applyMiddleware(async)(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
	<App/>
</Provider>, document.querySelector('.container'));
