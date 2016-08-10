import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import noteApp from './reducers'
import App from './components/App'

const initialState = {
	tabs: [{
		id: 0,
		name: 'Test'
	}],
    currentTab: 0
}

let store = createStore(noteApp, initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);