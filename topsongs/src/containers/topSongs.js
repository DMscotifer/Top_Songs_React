import React from "react";

class topSongs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    }
  }
  render() {
    return (
      <div>
        <h1>Top Songs on iTunes:</h1>
      </div>
    );
  }
}

export default topSongs;
