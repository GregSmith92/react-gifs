import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://giphy.com/media/${this.props.id}/200.gif`;
    console.log(this.props.id)
    return (
      <img src={src} alt="" className="gif"/>
    );
  }
}

export default Gif;
