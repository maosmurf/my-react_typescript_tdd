import {shallow} from "enzyme";
import React from "react";
import Counter from "./Counter";

it('should render a counter', () => {
  const wrapper = shallow(<Counter label={'Current'}/>);
  expect(wrapper.find('.counter label').text())
    .toBe('Current');
});
