import { Component } from 'react'
import { View, ScrollView } from '@tarojs/components'
import './index.scss'


export default class CityListView extends Component<any, any>{
  constructor(props: any) {
    super(props)
    this.state = {
      height: 600,
      scrollTopId: '',//城市列表，控制滑动到哪个字母
    }
  }
  handlerSelectCity(e) {
    let city = e.currentTarget.dataset.city;
    this.props.selectedCityAction(city);
  }

  render() {
    const { selectCity, cityList } = this.props;
    const { height, scrollTopId } = this.state;
    return (
      <View>
        <View className='city_list_item'>当前定位城市：{selectCity.name}</View>
        <ScrollView className='city_list' scrollY={true} scrollIntoView={scrollTopId} style={{ height: `${height}px` }}>
          {
            cityList.map((el, index) => {
              return (
                <View className='city' id={index == 0 ? 'one' : el.name} key={el.name}>
                  <View className='city_list_item city_title'>{el.name}</View>
                  {
                    el.cities.map((city,y) => {
                      return (
                        <View catchMove className='city_list_item' data-city={city} onTap={this.handlerSelectCity.bind(this)} key={y}>{city.name}</View>
                      )
                    })
                  }
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    )
  }
}