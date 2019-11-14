import React, {Component} from "react";

interface FancyBorderProps {
  color?: string;
  children?: React.ReactNode;
}

class FancyBorder extends Component<FancyBorderProps> {
  render() {
    return <div className={'FancyBorder'} style={{border: '2px dotted ' + this.props.color}}>
      {this.props.children}
    </div>
  };
}

export default FancyBorder;
