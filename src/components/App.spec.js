import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

const mockStore = configureStore([]);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={mockStore({})}>
      <Router>
        <App />
      </Router>
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
