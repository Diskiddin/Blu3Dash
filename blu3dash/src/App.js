import React, { Component } from 'react';
import Devices from './components/Devices';
import DeviceView from './components/DeviceView';
import AddDevice from './components/AddDevice';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [{name: 'Button1', type: 'Button', status:'on'}, {name: 'Button2', type: 'Button', status:'off'}],
      deviceData: {
        Button1: [
          ["Singe", 35],
          ["Double", 50],
          ["Long", 15]
        ],
        Button2: [
          ["Single", 25],
          ["Double", 35],
          ["Long", 40]
        ]
      },
      homePage: true,
      deviceView: false,
      addDevicePage: false,
      currentDevice: 0,
    }
  }

  addDevice = (device) => {
    var devices = this.state.devices
    devices.push(device)
    this.setState({devices: devices, homePage: true, addDevicePage: false});
    console.log(device);
  }

  viewDevice = (device) => {
    this.setState({
      homePage: false,
      deviceView: true,
      currentDevice: device,
    })
  }

  addDevicePage = () => {
    this.setState({
      homePage:false,
      addDevicePage: true,
    })
  }

  backFromDeviceView = () => {
    this.setState({
      homePage: true,
      deviceView: false
    })
  }

  backFromAddDevice = () => {
    this.setState({
      homePage: true,
      addDevicePage: false,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Blu3Dash</h1>
        </div>
        {this.state.homePage ?
          <div>
            <button
              className="add-device-button"
              onClick={this.addDevicePage.bind(this)}
              >Add Device</button>
            <Devices devices={this.state.devices} function = {this.viewDevice}/>
          </div>
        : null}
        {this.state.deviceView ?
          (
            <div>
              <button
              className="back-button"
              onClick = {this.backFromDeviceView.bind(this)}
              >Back</button>
              <DeviceView
                device={this.state.devices[this.state.currentDevice]}
                deviceData={this.state.deviceData[this.state.devices[this.state.currentDevice]['name']]}
                deviceType={this.state.devices[this.state.currentDevice]['type']}/>
            </div>
          ) : null
        }
        {this.state.addDevicePage ?
          (
            <div>
              <button
              className="back-button"
              onClick = {this.backFromAddDevice.bind(this)}
              >Back</button>
              <AddDevice devices={this.state.devices} addDeviceFunction={this.addDevice}/>
            </div>
          ) : null
        }

      </div>
    );
  }
}

export default App;
