import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import composeWithDevTools from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './components/App/App';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
//change if get to thunks
//const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const store = createStore(rootReducer, devTools);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
