import {mount} from "enzyme";
import React from "react";
import Greeting from "./Greeting";

it('should greet user', () => {
  const wrapper = mount(<Greeting isLoggedIn={false}/>);
  expect(wrapper.find('h2').text()).toBe('Please sign up.');
});

it('should greet user', () => {
  const wrapper = mount(<Greeting isLoggedIn={true}/>);
  expect(wrapper.find('h2').text()).toBe('Welcome back!');
});

