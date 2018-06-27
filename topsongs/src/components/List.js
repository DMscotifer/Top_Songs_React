import React, {Component} from 'react';
import Song './Song.js';

class List extends Component {
  constructor(props) {
    super(props) {
      this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleButtonClick(event) {
      const audio = document.querySelector('audio')
      audio.src = event.target.value;
    }

    render() {
      const SongList = this.props.songs.map((song, index) => (
        <Songs
          key={index+1}
          position={index+1}
          artist={song['im:artist'].label}
          artist={song['im:name'].label}
          artist={song['im:collection']['im:name'].label}
          demo={song.link[1].attributes.href}
          onChoice={this.handleButtonClick}
        />
      ))

      return (
        <div className="song-rows">
          <div className="row">
            {List.slice(0,5)}
          </div>
          <div className="row">
            {List.slice(5, 10)}
          </div>
          <div className="row">
            {List.slice(10, 15)}
          </div>
          <div className="row">
            {List.slice(15, 20)}
          </div>
        </div>
      )
    }
  }
