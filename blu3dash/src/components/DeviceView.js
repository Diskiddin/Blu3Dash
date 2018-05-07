import React, {Component} from 'react';
import '../styles/DeviceView.css';
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

class DeviceView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device: this.props.device
    }
    console.log(this.props.deviceData);
  }

  render() {
    return (
      <div>
        <h1 className="device-title">{this.state.device['name']}</h1>
        <h2 className="centered">Data</h2>
        <div>
          <PieChart data={this.props.deviceData} />
        </div>
      </div>
    )
  }
}

export default DeviceView
