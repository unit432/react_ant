import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

it('render without crashing', () => {

  const mockStore = configureStore([]);
  const wrapper = mount(
    <Provider store={mockStore({})}>
      <MemoryRouter><App /></MemoryRouter>
    </Provider>
  )

  expect(
    wrapper.find('App').length
  ).toEqual(1)
})
