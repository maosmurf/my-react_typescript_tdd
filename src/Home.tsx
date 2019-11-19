import React from "react";
import {RouteComponentProps} from "react-router-dom";

interface HomeMatchParams {
  name: string;
}

interface HomeProps extends RouteComponentProps<HomeMatchParams> {
}

class Home extends React.Component<HomeProps> {

  render() {
    return <p>@ {this.props.match.url}</p>;
  }
}

export default Home;
