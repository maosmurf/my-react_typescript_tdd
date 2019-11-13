import React, {Component} from "react";

type HeadingProps = { name: string };

export const label = (name: string) => {
  return `Hello ${name.toUpperCase()}`;
};

class Heading extends Component<HeadingProps> {
  render() {
    return <h1
      className={'headerOne'}>{label(this.props.name)}</h1>;
  }
}

export default Heading;
