import Taro from '@tarojs/taro'
import  { Component } from 'react'
import { View, Map, Image, Text, Textarea } from '@tarojs/components'
import store from '@store/index'
import { updateGlobalData } from '@store/reducers'
import { GPS } from '@lib/GPS'
import { queryError } from '@utils/utils'
import LocationUtils from '@utils/locationUtil'
import CityListView from './CityList/index'
import {
  mGetNearbypois,
} from '@api/actions'
import './index.scss'


const ps2 = "请输入城市中文名或拼音"

class Address extends Component<any, any>{
  regionChangeTime: number = 0;
  constructor(props: any) {
    super(props)
    this.state = {
      content: '',
      placeStr: "您在哪上车",
      selectCity: {
        name: '', //选中的城市name
        realName: '',//n如果开通城市是三级，则name是三级的父级城市名字，realName是三级的名字
        id: '',//选中的城市id
        latitude: 0,
        longitude: 0
      },
      cityListShow: false,
      remmendList: [],
      cityList: [],
      calloutAddress: '',
    }
  }
  async componentDidMount() {
    const { startAddress } = store.getState().globalData;
    if (startAddress.latitude && startAddress.longitude) {
      await this.getAllCityList();
      this.mapChanged(startAddress);
    }
  }

  async mapChanged(e) {
    console.log('aaaaaaaaaaaa')
    console.log(e)
    await this.locToCityInfo(e)
    this.getRecommendStart(e)
  }
  async locToCityInfo(coord): Promise<void> {
    const info = await LocationUtils.getBDAddressMsg(coord.latitude, coord.longitude)
    if (!info) return;
    let loc = info.loc;
    let selectCity = {
      name: loc.cityName,//这个是展示的名字，二级城市的名字
      latitude: coord.latitude,
      longitude: coord.longitude
    }
    this.setState({ selectCity, calloutAddress: loc.name })
  }

  //推荐出发地
  async getRecommendStart(e) {
    const res = LocationUtils.mGetNearbypois(e);
    this.setState({
      remmendList: res
    })
  }

  //点击左上角城市名字事件
  handlerCityView = async () => {
    if (this.state.cityListShow) return;
    let list = this.state.cityList;
    if (list.length <= 0) {
      await this.getAllCityList();
    }

    this.setState({
      cityListShow: true,
      placeStr: ps2,
      content: '',//置空textarea
    })
  }
  async selectedAddress(address) {
    let info: any = await LocationUtils.getBDAddressMsg(address.lat || address.latitude, address.lng || address.longitude, true);
    const startAddress = { ...info.loc, cityId: info.cityId }
    await store.dispatch(updateGlobalData({ startAddress }))
    Taro.eventCenter.trigger('selectStartAddress', info)
    Taro.navigateBack()
  }
  //选中地图下面的推荐地址
  remmendItemAction(e) {
    const remend = e.currentTarget.dataset.remend;
    this.selectedAddress(remend)
  }
  //从城市列表里选择了城市
  handlerSelectCity(e) {
    let selectCity = { ...this.state.selectCity, name: e.name, id: e.cityId }
    this.setState({
      selectCity,
      cityListShow: false,
      placeStr: "您在哪上车",
      content: '', //置空textarea
    })
    let coord = GPS.bd_decrypt(e.lat, e.lng)
    this.mapChanged({
      latitude: coord.lat,
      longitude: coord.lon,
      name: e.name
    })
  }

  async getAllCityList() {
    if (this.state.cityList.length > 0) return;
    this.setState({
      cityList: [{
        cities: [{
          name: "北京市",
          lat: 39.910501,
          lng: 116.413772
        }, {
          name: "上海市",
          lat: 31.237661,
          lng: 121.479176
        }, {
          name: "杭州市",
          lat: 30.293395,
          lng: 120.160105
        }, {
          name: "成都市",
          lat: 30.665531,
          lng: 104.072215
        }], name: '热门城市'
      }]
    })
  }
  render() {
    const { content, placeStr, selectCity, cityListShow, remmendList, cityList, calloutAddress } = this.state;
    return (
      <View>
        <View className='address_inputBg'>
          <View className='address_city_select' onTap={this.handlerCityView}>
            <Text className='address_city_name'>{selectCity.name}</Text>
            <Image className='address_city_arrow' src={require('../../res/nav_icon_unfold.png')}></Image>
          </View>
          <Text className='address_line'>|</Text>
          <Textarea className={process.env.TARO_ENV == 'alipay' ? 'address_input address_special_input_alipay' : 'address_input'} value={content} confirmType="done" placeholderClass='placeholder_class' placeholder={placeStr} maxlength={20} onInput={this.textareaInputChaned}></Textarea>
        </View>
        <View className='address_mapBg'>
          <Map id="map" scale={14} style={{ width: '100%', height: '100%' }} latitude={selectCity.latitude} longitude={selectCity.longitude}></Map>
          <Image className='address_iconCenter' src={require('../../res/center-location.png')}></Image>
          {
            calloutAddress &&
            <View className="address_callout">
              <View className="address_callout_center">{calloutAddress}</View>
              <View className="address_arrow_down"></View>
            </View>
          }
        </View>
        {
          !cityListShow &&
          <View className='address_remmendBg'>
            {
              remmendList.map((el, index) => {
                return (
                  <View className='address_remItem' key={el.lat + index} data-remend={el} onTap={this.remmendItemAction.bind(this)}>
                    <Text className='address_remName'>{el.name}</Text>
                    <Text className='address_remDetail'>{el.address || el.addressDetail}</Text>
                  </View>
                )
              })
            }
          </View>
        }
        {
          // 支付宝小程序来回切换map的时候会有问题，所以就一直显示，不能隐藏，只能把citylist定位absolute
          cityListShow &&
          <View className='cityList_bg'>
            <CityListView selectCity={selectCity} cityList={cityList} selectedCityAction={this.handlerSelectCity.bind(this)}></CityListView>
          </View>
        }
      </View>
    )
  }
}

export default Address