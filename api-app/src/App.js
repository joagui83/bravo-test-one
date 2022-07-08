import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      nasaData: mockNasaData.photos
    }
  }
  getPic = () => {
    console.log(this.state.nasaData.photos[0].img_src)
    let randomPhoto = Math.floor(Math.random() * this.state.nasaData.length)
    this.setState(marsPhotoaa: this.state.)
  }
  render() {
    return (
      <div>
        <h1>Mars Rover Pics</h1>
        <button onClick={this.getPic}>Get a Mars Pic</button>
      </div>
    );
  }
}

export default App;