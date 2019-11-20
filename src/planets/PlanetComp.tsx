import React, {Component} from "react";

interface Planet {
  name: string
}

interface PlanetProps {
  planetId: string;
}

interface PlanetState {
  planet?: Planet;
}


class PlanetComp extends Component<PlanetProps, PlanetState> {

  componentDidMount() {
    console.log(`componentDidMount "${this.props.planetId}"`);
    this.doFetch(this.props.planetId);
  }

  componentDidUpdate(prevProps: PlanetProps) {
    if (prevProps.planetId !== this.props.planetId) {
      console.log(`componentDidUpdate "${prevProps.planetId}" => "${this.props.planetId}"`);
      this.doFetch(this.props.planetId);
    }
  }

  private doFetch(planetId: string) {
    fetch(`https://swapi.co/api/planets/${planetId}/`)
      .then(res => res.json())
      .then(res => this.setState({planet: res}))
      .catch(() => this.setState({planet: undefined}));
  }

  render() {
    if (!this.state || !this.state.planet) {
      return <h3>
        <span role={"img"} aria-label={"earth"}>🌍</span>
        <span role={"img"} aria-label={"boom"}>💥</span>
        <span aria-label={"saturn"} role={"img"}>🪐</span>
      </h3>
    }
    return <div>
      <p>Name: {this.state.planet.name}</p>
    </div>
  }
}

export default PlanetComp;
