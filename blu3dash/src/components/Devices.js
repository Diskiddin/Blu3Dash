import React, {Component} from 'react';
import '../styles/Devices.css';

class Devices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: this.props.devices,
    }
    console.log(this.props.devices);
  }

  render() {
    var buttons = [];
    for (var device in this.state.devices) {
      buttons.push(<button
         className = "device-button"
         key = {device}
         onClick = {this.props.function.bind(this, device)}
         style = {this.state.devices[device]['status'] === 'on' ? ({backgroundColor: "#a4eaa5"}) : ({backgroundColor: "#f99898"})
      }>
         <h2 className="device-button-title">{this.state.devices[device]['name']}</h2>
         <h3 className="device-button-type">{this.state.devices[device]['type']}</h3></button>)
    }
    return (
      <div>
        <div className="devices-label">Devices:</div>
        <div className="devices-container">{buttons}</div>
      </div>
    )
  }
}

export default Devices
