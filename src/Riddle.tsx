import React, {Component} from 'react';

interface RiddleProps {
  riddleID: string;
}

class Riddle extends Component<RiddleProps> {

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://www.riddle.com/files/js/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    const divStyle = {
      margin: "0 auto",
      maxWidth: "100%",
      width: "640px"
    };

    const iframeStyle = {
      margin: "0 auto",
      maxWidth: "100%",
      width: "100%",
      height: "300px",
      border: "1px solid #cfcfcf"
    };

    const riddleUrl = "//www.riddle.com/a/" + this.props.riddleID + "?wide=1";

    return (
      <div className="App">
        <div className="riddle_target" data-rid-id={this.props.riddleID} data-fg="#252525"
             data-bg="#EDEDED" style={divStyle} data-auto-scroll="true">
          <iframe title="embed-test" style={iframeStyle}
                  src={riddleUrl}></iframe>
        </div>
      </div>
    );
  }
}

export default Riddle;
