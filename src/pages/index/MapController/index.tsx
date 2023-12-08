import Taro from '@tarojs/taro'
import { Component } from 'react'
import { Map, Image, View } from '@tarojs/components'
import store from '@store/index'
import { updateGlobalData } from '@store/reducers'

export default class MapController extends Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            mapInfo: {
                latitude: 39.908823,
                longitude: 116.39747,
            },
            calloutAddress: '正在获取您的位置...',
        }
    }
    componentDidMount() {
        //从选择地址页面选择了出发地
        Taro.eventCenter.on('selectStartAddress', this.startAddressChanged.bind(this))
    }

    // eslint-disable-next-line react/sort-comp
    async startAddressChanged(pos: { loc: any; cityId?: any }) {
        if (pos && pos.loc) {
            const { loc, cityId } = pos;
            this.setState({
                mapInfo: loc,
                calloutAddress: loc.name
            })
            const startAddress = { ...loc, cityId }
            await store.dispatch(updateGlobalData({ startAddress }))
        }
    }

    skipStartAddress() {
        let url = '/pages/address/index?locTip=start'
        Taro.navigateTo({ url })
    }
    render() {
        const { mapInfo, calloutAddress } = this.state
        return (
            <>
                <Map
                    id="map"
                    style={{ width: '100%', height: '100vh' }}
                    scale={14}
                    latitude={mapInfo.latitude}
                    longitude={mapInfo.longitude}
                    showLocation
                />
                {/*地图中间定位icon*/}
                <View className="index-icon-center">
                    <Image className="index-icon-img" src={require('../../../res/center-location.png')}></Image>
                </View>
                {/*气泡 */}
                <View className="index-callout" onClick={this.skipStartAddress.bind(this)}>
                    <View className="index-callout-center">{calloutAddress}</View>
                    <Image className="index-arrow-right" src={require('../../../res/map-arrow2.png')}></Image>
                    <View className="index-arrow-down"></View>
                </View>
            </>
        )
    }
}