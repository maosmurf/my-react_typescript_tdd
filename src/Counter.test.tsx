import {shallow} from "enzyme";
import React from "react";
import Counter from "./Counter";

it('should render a counter with default label', () => {
  const wrapper = shallow(<Counter/>);
  expect(wrapper.find('.counter label').text()).toBe('Count');
});

it('should render a counter with custom label', () => {
  const wrapper = shallow(<Counter label={'Current'}/>);
  expect(wrapper.find('.counter label').text()).toBe('Current');
});

it('should render a counter with default count', () => {
  const wrapper = shallow(<Counter label={'Current'}/>);
  expect(wrapper.find('.counter span').text()).toBe('0');
});

it('should render a counter with given count', () => {
  const wrapper = shallow(<Counter label={'Current'} count={1}/>);
  expect(wrapper.find('.counter span').text()).toBe('1');
});

it('should call the handler on click', () => {
  const handler = jest.fn();
  const wrapper = shallow(<Counter onCounterIncrease={handler}/>);
  wrapper.find('.counter').simulate('click');
  expect(handler).toBeCalled();
});

it('should call the handler on click with shift key', () => {
  const handler = jest.fn();
  const wrapper = shallow(<Counter onCounterIncrease={handler}/>);
  wrapper.find('.counter').simulate('click', {shiftKey: true});
  expect(handler).toBeCalledWith(true);
});
