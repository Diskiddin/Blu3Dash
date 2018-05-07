import React, { Component } from 'react';
import Devices from './components/Devices';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfRows: 5,
      devices: [{name: 'Test1', type: 'Button', status:'On'}, {name: 'Test2', type: 'Button', status:'Off'}],
    }
  }

  addRow = () => {
    this.setState({
      numberOfRows: this.state.numberOfRows + 1,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Blu3Dash</h1>
        </div>
        <Devices devices={this.state.devices}/>
      </div>
    );
  }
}

export default App;
