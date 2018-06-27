import React from "react";

class TopSongs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    fetch(url).then(res => res.json()).then(songs => this.setState({songs: songs.feed.entry}));
  }

  render() {
    return (
      <div className="top-songs">
        <h1>Top Songs on iTunes</h1>
        <TopSongs songs={this.state.songs} />
      </div>
    );
  }
}

export default TopSongs;
