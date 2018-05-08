import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import '../styles/AddDevice.css';


class AddDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: this.props.devices,
      deviceName: '',
      selectedOption: '',
    }
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({deviceName: event.target.value});
  }

  handleChange = (selectedOption) => {
      this.setState({ selectedOption: {selectedOption: selectedOption}});
  }

  submit = () => {
    /*for(var device in this.state.devices) {
      if(this.state.devices[device]['name'].toLowerCase() === this.state.deviceName.toLowerCase()) {
        console.log("Repeat Name");
      }
    }*/
    var newDevice = {name: this.state.deviceName, type: this.state.selectedOption.selectedOption.label, status:'on'}
    this.props.addDeviceFunction(newDevice);
  }

  render() {
    const { selectedOption } = this.state.selectedOption;
    return (
      <div>
        <h2 className="centered">Add Device</h2>
        <div className="centered">
          <h3>Device Name:</h3>
          <input className="add-device-input" type="text" value={this.state.deviceName} onChange={this.handleNameChange} />
          <h3>Device Type:</h3>
          <div className="select-device-type">
            <Select
              joinValues={true}
              clearable={false}
              name="form-field-name"
              value={selectedOption}
              onChange={this.handleChange}
              options={[
                { value: 'button', label: 'Button' },
                { value: 'monitor', label: 'Monitor' },
                { value: 'sensor', label: 'Sensor'}
              ]}
            />
          </div>
          <button className="submit-button" onClick={this.submit}>Submit</button>
          <button className="download-button">
            <a className="download-text" href="https://drive.google.com/uc?export=download&id=1D3B6vT5e0Wi0yTD9p_puF_RKw65fgK4m" download="certificate.pem">Download Certificate</a>
          </button>

        </div>
      </div>
    )
  }
}

export default AddDevice
