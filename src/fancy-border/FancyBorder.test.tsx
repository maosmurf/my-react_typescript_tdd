import {shallow} from "enzyme";
import React from "react";
import FancyBorder from "./FancyBorder";

it('should render fancy border around children', () => {
  const wrapper = shallow(<FancyBorder color={'red'}/>);
  expect(wrapper.find('.FancyBorder').prop('style')).toHaveProperty('border', '5px dotted red');
});

it('should render children within fancy border', () => {
  const children = <p>Alice</p>;
  const wrapper = shallow(<FancyBorder color="red" children={children}/>);
  expect(wrapper.find('.FancyBorder').children().length).toBe(1);
});
it('should render fancy border around all children', () => {
  const children = [<p key={'alice'}>Alice</p>, <p key={'bob'}>Bob</p>];
  const wrapper = shallow(<FancyBorder color="lime" children={children}/>);
  expect(wrapper.find('.FancyBorder').children().length).toBe(2);
});
