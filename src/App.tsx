import React from 'react';
import Heading from "./Heading";
import Counter from "./Counter";

const App = () =>
  <div>
    <Heading name='world'/>
    <Counter label={'Current'}/>
  </div>;

export default App;
