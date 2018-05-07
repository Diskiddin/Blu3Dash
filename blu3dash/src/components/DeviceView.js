import React, {Component} from 'react';
import '../styles/DeviceView.css';
import ReactChartkick, { PieChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

class DeviceView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device: this.props.device,
      deviceData: this.props.deviceData,
      deviceType: this.props.deviceType
    }
  }

  render() {
    return (
      <div>
        <h1 className="device-title">{this.state.device['name']}</h1>
        <h2 className="centered">{this.state.deviceType} Data</h2>
        <div>
          <PieChart data={this.state.deviceData} />
        </div>
      </div>
    )
  }
}

export default DeviceView
