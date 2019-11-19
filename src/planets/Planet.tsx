import React, {Component} from "react";
import {RouteComponentProps} from "react-router";

interface Planet {
  name: string

}

interface PlanetMatchParams {
  name: string;
}

interface PlanetProps extends RouteComponentProps<PlanetMatchParams> {
}

interface PlanetsState {
  hasErrors: boolean;
  planet?: Planet;
}

class Planet extends Component<PlanetProps, PlanetsState> {
  state: PlanetsState = {
    hasErrors: false,
  };

    componentDidMount() {
    fetch("https://swapi.co/api/planets/4/")
      .then(res => res.json())
      .then(res => this.setState({planet: res}))
      .catch(() => this.setState({hasErrors: true}));
  }

  render() {
    return <div>
      <p>Name: {this.state.planet ? this.state.planet.name : '-'}</p>
    </div>;
  }
}

export default Planet;
