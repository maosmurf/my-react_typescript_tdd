import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from "enzyme";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the app', () => {
  const wrapper = mount(<App/>);
  expect(wrapper.find('h1').text())
    .toBe('Hello WORLD');
  expect(wrapper.find('.counter label').text())
    .toBe('Current');
});
