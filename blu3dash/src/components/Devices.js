import React, {Component} from 'react';
import '../styles/Devices.css';

class Devices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: this.props.devices,
    }
  }

  render() {
    var buttons = [];
    for (var device in this.state.devices) {
      buttons.push(<button
         className="device-button"
         style= {this.state.devices[device]['status'] === 'On' ? ({backgroundColor: "#47af2f"}) : ({backgroundColor: "#f25757"})
      }>
         {this.state.devices[device]['name']}</button>)
    }
    console.log(this.state.devices);
    return (
      <div>
        <div className="devices-label">Devices: {buttons}</div>
      </div>
    )
  }
}

export default Devices
