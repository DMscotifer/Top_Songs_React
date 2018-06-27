import React, {Component} from 'react';

class Song extends Component {
  render() {
    return (
      <div className="song">
        <p className="chart-position"> {this.props.position} </p>
        <div className="song-details">


          <div className="album-image">

            <img className="image" src={this.props.image} alt="Cover" onMouseOver={this.handleMouseOver}/>
            <div className="button-div">
              <button value={this.props.sample} onClick={this.props.onChoice}>Demo</button>
            </div>

          </div>

          <ul>
            <li className="title"> {this.props.title} </li>
            <li className="arist"> {this.props.artist} </li>
            <li className="album"> {this.props.album} </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Song;
