import React, {Component} from "react";

interface NumberListProps {
  numbers: number[];
}

class ListItem extends Component<{ value: string }> {
  render() {
    // Correct! There is no need to specify the key here:
    return <li>{this.props.value}</li>;
  }
}

class NumberList extends Component<NumberListProps> {
  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map((number) =>
      <ListItem key={number.toString()} value={number.toString()}/>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
}

export default NumberList;
