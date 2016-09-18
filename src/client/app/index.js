import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from 'reducers'
import App from 'components/App'

let store = applyMiddleware(thunk)(createStore)(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)