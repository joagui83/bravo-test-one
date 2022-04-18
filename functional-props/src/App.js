import React, { Component } from 'react';
import Menu from './components/Menu';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      adultMenu: ["Steak", "Brisket", "Potatoes"],
      petMenu: ["Cheese burgers", "Pupaccino", "Chicken"],
      plate: []
    }
  }


fillPlate = (item) => {
  this.setState({plate: [...this.state.plate, item]})
}


  render() {
    return (
      <div>
        <h1>Bravo BBQ</h1>
          <h2>Adult Menu</h2>
            <Menu menu ={this.state.adultMenu} fillPlate={this.fillPlate}/>
          <h2>Pet Menu</h2>        
            <Menu menu ={this.state.petMenu} fillPlate={this.fillPlate}/>
          <h3>What's on your plate</h3>
          <ul>
            {this.state.plate.map(value => {
              return <li>{value}</li>
            })}
          </ul>

      </div>
    );
  }
}

export default App;