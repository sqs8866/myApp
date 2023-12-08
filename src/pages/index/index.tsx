import React, { Component } from 'react'
import locationUtil from '@utils/locationUtil'
import MapController from './MapController'
import './index.scss'

export default class Index extends Component<{}, any>{
  mapControllerRef: React.RefObject<MapController> = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  async componentDidMount() {
    await this.getNowLocation();
  }
  async getNowLocation() {
    let position = await locationUtil.getCurrentPosition();
    console.log('zzzzzz',position)
    if (this.mapControllerRef.current) {
      this.mapControllerRef.current.startAddressChanged(position)
    }
  }
  render() {
    return (
      <MapController ref={this.mapControllerRef} />
    )
  }
}
