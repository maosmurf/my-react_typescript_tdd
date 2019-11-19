import React from "react";
import {RouteComponentProps} from "react-router-dom";

interface MatchParams {
  name: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {
}

class Home extends React.Component<MatchProps> {

  render() {
    return <p>@ {this.props.match.url}</p>;
  }
}

export default Home;
