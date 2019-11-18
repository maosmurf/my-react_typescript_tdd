import React, {Component} from "react";

interface Planet {
  name: string

}

interface PlanetsState {
  hasErrors: boolean;
  planet?: Planet;
}

class Planets extends Component<object, PlanetsState> {
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

export default Planets;
