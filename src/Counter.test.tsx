import {shallow} from "enzyme";
import React from "react";
import Counter from "./Counter";

it('should default render a label Count', () => {
  const wrapper = shallow(<Counter/>);
  expect(wrapper.find('.counter label').text())
    .toBe('Count');
});

it('should render given label', () => {
  const wrapper = shallow(<Counter label={'Current'}/>);
  expect(wrapper.find('.counter label').text())
    .toBe('Current');
});

it('should default start at zero', () => {
  const wrapper = shallow(<Counter label={'Current'}/>);
  expect(wrapper.find('.counter span').text()).toBe('0');
});

it('should start at given value', () => {
  const wrapper = shallow(<Counter label={'Current'} start={10}/>);
  expect(wrapper.find('.counter span').text()).toBe('10');
});
