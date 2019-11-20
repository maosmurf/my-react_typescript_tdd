import React from "react";
import useFetch from 'fetch-suspense';

interface HomeProps {
  url: string;
}

interface Route {
  layout: {
    [key: string]: {
      type: string
    }[]
  };
}

class Home extends React.Component<HomeProps> {

  render() {
    const uri = this.props.url.replace(/\/$/, "");
    const url = `https://efs.kurier.at/api/v1/cfs/route?uri=/kurierat${uri}`;
    let TEN_SECONDS = 10000;
    const response: Route = useFetch(url, undefined, {lifespan: TEN_SECONDS}) as Route;
    return <p>@ {response.layout.center.length}</p>;
  }

}

export default Home;
