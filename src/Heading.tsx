import React, {Component} from "react";

export const label = (name: string) => {
  return `Hello ${name.toUpperCase()}`;
};

interface HeadingProps {
  name: string
}

class Heading extends Component<HeadingProps> {
  static defaultProps = {name: 'world'};

  render() {
    const {name} = this.props;
    return <h1
      className={'headerOne'}>{label(name)}</h1>;
  }
}

export default Heading;
