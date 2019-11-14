import {mount} from "enzyme";
import React from "react";
import Greeting from "./Greeting";

it('should greet user', async () => {
  const wrapper = mount(<Greeting isLoggedIn={false}/>);
  expect(wrapper.find('h2').text()).toBe('Please sign up.');
});
