import {shallow} from "enzyme";
import React from "react";
import Heading, {label} from "./Heading";

it('generates a label', () => {
  const l = label('test');
  expect(l).toBe('Hello TEST');
});

it('renders the heading with default label', () => {
  const wrapper = shallow(<Heading/>);
  expect(wrapper.find('h1').text()).toBe('Hello WORLD');
});

it('renders the heading with class', () => {
  const wrapper = shallow(<Heading name='world'/>);
  expect(wrapper.find('h1').hasClass('headerOne')).toBeTruthy();
});
