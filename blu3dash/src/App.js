import React, { Component } from 'react';
import Devices from './components/Devices';
import DeviceView from './components/DeviceView';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [{name: 'Button1', type: 'button', status:'on'}, {name: 'Button2', type: 'button', status:'off'}],
      deviceData: {
        Button1: [
          ["Singe", 35],
          ["Double", 50],
          ["Long", 15]
        ]
      },
      homePage: true,
      deviceView: false,
      currentDevice: 0,
    }
  }

  addRow = () => {
    this.setState({
      numberOfRows: this.state.numberOfRows + 1,
    })
  }

  viewDevice = (device) => {
    this.setState({
      homePage: false,
      deviceView: true,
      currentDevice: device,
    })
  }

  backFromDeviceView = () => {
    this.setState({
      homePage: true,
      deviceView: false
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Blu3Dash</h1>
        </div>
        {this.state.homePage ?
          <Devices devices={this.state.devices} function = {this.viewDevice}/>
        : null}
        {this.state.deviceView ?
          (
            <div>
              <button
              className="back-button"
              onClick = {this.backFromDeviceView.bind(this)}
              >Back</button>
              <DeviceView device={this.state.devices[this.state.currentDevice]} deviceData={this.state.deviceData[this.state.devices[this.state.currentDevice]['name']]}/>
            </div>
          ) : null
        }

      </div>
    );
  }
}

export default App;
