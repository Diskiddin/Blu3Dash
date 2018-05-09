import React, {Component} from 'react';
import '../styles/DeviceView.css';
import ReactChartkick, { PieChart, ColumnChart, BarChart, LineChart } from 'react-chartkick';
import Chart from 'chart.js';
import Select from 'react-select';

ReactChartkick.addAdapter(Chart)

class DeviceView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      device: this.props.device,
      deviceData: this.props.deviceData,
      deviceType: this.props.deviceType,
      selectedOption: this.props.device['type'] === 'Button' ? (
        {value: 'pie', label: 'Pie'}
      ) : this.props.device['type'] === 'Sensor' ? (
        {value: 'line', label: 'Line'}
      ) : this.props.device['type'] === 'Monitor' ? (
        {value: 'line', label: 'Line'}
      ) : null
    }
    console.log(this.props.deviceData[0]);
  }

  handleChange = (selectedOption) => {
    this.setState({selectedOption: selectedOption})
  }

  componentDidMount() {
    let timer = null;
    if(this.state.deviceType === 'Monitor') {
      timer = setInterval(this.addData, 1000);
    } else {
      timer = setInterval(this.addData, 10000);
    }
    this.setState({
      timer: timer,
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  addData = () => {
    if(this.state.device['type'] === 'Button') {
      var randomNumber = Math.floor(Math.random() * 100);
      var newDeviceData = this.state.deviceData;
      if(randomNumber >= 66) {
        newDeviceData[0][1] = newDeviceData[0][1] + 1;
      } else if (randomNumber >= 33 && randomNumber < 66) {
        newDeviceData[1][1] = newDeviceData[1][1] + 1;
      } else {
        newDeviceData[2][1] = newDeviceData[2][1] + 1;
      }
      this.setState({
        deviceData: newDeviceData,
      });
    } else if (this.state.device['type'] === 'Sensor') {
      randomNumber = Math.floor(80 - (Math.random() * 5))
      var newDeviceData = this.state.deviceData
      newDeviceData[new Date()] = randomNumber;
      if(Object.keys(newDeviceData).length > 10) {
        var keys = Object.keys(newDeviceData)
        delete newDeviceData[keys[0]];
      }
      this.setState({
        deviceData: newDeviceData
      })
    } else if (this.state.device['type'] === 'Monitor') {
      randomNumber = Math.floor(Math.random() * 2)
      console.log(randomNumber);
      var newDeviceData = this.state.deviceData
      newDeviceData[new Date()] = randomNumber;
      if(Object.keys(newDeviceData).length > 10) {
        var keys = Object.keys(newDeviceData)
        delete newDeviceData[keys[0]];
      }
      this.setState({
        deviceData: newDeviceData
      })
    }
  }

  render() {
    let title = '';
    if(this.state.device['type'] === 'Button') {
      title = 'Clicks'
    }
    return (
      <div>
        <h1 className="device-title">{this.state.device['name']}</h1>
        <div className="device-type-and-style">
          <h2 className="device-type-label">
          {this.state.deviceType} Data
          </h2>
          <h2 className="device-style-label"> Select Style:</h2>
          <div className="select-style">
            <Select
              joinValues={true}
              clearable={false}
              name="form-field-name"
              value={this.state.selectedOption}
              onChange={this.handleChange}
              options={ this.state.device['type'] === 'Sensor' || this.state.device['type'] === 'Monitor' ? ([
                { value: 'line', label: 'Line'}
              ]) : ([
                { value: 'pie', label: 'Pie' },
                { value: 'column', label: 'Column' },
                { value: 'bar', label: 'Bar'},
              ])}
            />
          </div>
        </div>
        <div className="data-view">
          {this.state.selectedOption.value === 'pie' ? (
            <PieChart title={title} data={this.state.deviceData} />
          ) : this.state.selectedOption.value === 'column' ? (
            <ColumnChart title={title} data={this.state.deviceData}/>
          ) : this.state.selectedOption.value === 'bar' ? (
            <BarChart title={title} data={this.state.deviceData}/>
          ) : this.state.selectedOption.value === 'line' ? (
            <LineChart data={this.state.deviceData}/>
          ): (null)}
        </div>
      </div>
    )
  }
}

export default DeviceView
