import React from 'react';
import ReactDOM from 'react-dom';
import App, {label} from './App';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App name='world'/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the heading', () => {
  let wrapper = shallow(<App name='world'/>);
  expect(wrapper.find('h1').text()).toBe('Hello WORLD');
});

it('generates a label', () => {
  const l = label('test');
  expect(l).toBe('Hello TEST');
});
