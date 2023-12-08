import Taro from "@tarojs/taro";
import { mGpsLocation } from "@api/actions";
import { GPS } from "@lib/GPS";
import { queryError, showModal } from "./utils";
import store from "@store/index";
import { updateGlobalData } from "@store/reducers";

let lastLoc;
class LocationClass {
  //获取地理位置
  getLocation(params: any = {}) {
    return new Promise((resolve) => {
      return this.getLocationCom(resolve, params);
    });
  }
  getLocationCom(resolve, params) {
    Taro.getLocation({
      type: "gcj02",
      success: async (resLoc) => {
        lastLoc = resLoc;
        let baseData = await this.getBDAddressMsg(
          resLoc.latitude,
          resLoc.longitude
        );

        if (baseData) {
          resolve(baseData);
        }
      },
      fail: async (res: any) => {
        console.log('rr')
        resolve(this.getAuthor());
      },
    });
  }
  //经纬度转换成地理位置信息
  async getBDAddressMsg(lat: number, lon: number, bd?: boolean) {
    let coord = bd ? { lat, lon } : GPS.bd_encrypt(lat, lon);
    try {
      let json: any = await this.getCityInfo(coord);
      if (json.code != "0") return;

      if (bd) {
        coord = GPS.bd_decrypt(lat, lon);
      }
      const { name, component } = json.location.street;
      let loc = {
        //腾讯坐标
        latitude: bd ? coord.lat : lat,
        longitude: bd ? coord.lon : lon,
        name,
        cityName: component.city,
        district: component.district,
      };
      const { latitude, longitude } = json.location.gps;
      return {
        cityId: component.cityId,
        loc,
        latitude, //百度坐标
        longitude,
        formattedAddress: component.formattedAddress,
      };
    } catch (error) {
      showModal({ content: "定位信息转换失败!请重新获取定位信息" });
    }
  }
  //获取当前位置，并替换strore中存的值
  async getCurrentPosition(params?: any) {
    let data: any = await this.getLocation(params);
    if (data) {
      let { loc, cityId, latitude, longitude } = data;
      store.dispatch(
        updateGlobalData({
          nowLocBD: {
            name: loc.name,
            cityName: loc.cityName,
            cityId,
            latitude,
            longitude,
          },
        })
      );
    }
    return data;
  }
  async getCityInfo(coord) {
    let json = await mGpsLocation({
      latitude: coord.lat,
      longitude: coord.lon,
    });
    if (json.code != "0") {
      queryError(json.message);
    }
    return json;
  }
  async getAuthor() {
    let opend = await this.getLocationOpened();
    if (opend) {
      return Promise.resolve(1);
    }
    Taro.showModal({
      title: "温馨提醒",
      content: "需要获取您的地理位置才能使用小程序",
      cancelText: "取消",
      confirmText: "开启定位",
      complete: (res: any) => {
        if (res.confirm) {
          Taro.openSetting();
        }
        return Promise.resolve(0);
      },
    });
  }
  getLocationOpened() {
    return new Promise((resolve) => {
      Taro.getSetting({
        withSubscriptions: false,
        complete: (res: any) => {
          //支付宝是location
          resolve(
            res.authSetting["location"] ||
            res.authSetting["scope.userLocation"] ||
            res.authSetting["scope.userLocationBackground"]
          );
        },
      });
    });
  }

  mGetNearbypois(obj) {
    console.log(obj)
    let list = {
      '北京市': [{
        address: "北京市东城区前门东路大江胡同120号",
        lng: "116.40600321905312",
        name: "台湾文化商务区",
        lat: "39.90127579107043"
      }, {
        address: "北京市东城区前门大街",
        lng: "116.40458389634735",
        name: "前门",
        lat: "39.90552392262052"
      }, {
        address: "北京市东城区西河沿219号",
        lng: "116.40778186396287",
        name: "永福219号",
        lat: "39.90545473693707"
      }, {
        address: "北京市东城区长巷二条1号",
        lng: "116.40777288090777",
        name: "长巷二条2号四合院",
        lat: "39.9047213643627"
      }, {
        address: "北京市东城区前门大街甲2号",
        lng: "116.4067577956815",
        name: "中国铁道博物馆-正阳门馆",
        lat: "39.906215775581735"
      }, {
        address: "北京市东城区西打磨厂街228号",
        lng: "116.40784474534857",
        name: "METAL HANDS(前门店)",
        lat: "39.904894330305545"
      }, {
        address: "北京市东城区崇文门西河沿街253号",
        lng: "116.4064164395877",
        name: "前门(地铁站)",
        lat: "39.905337121113554"
      }],
      '上海市': [{
        address: "威海路333弄1-38号",
        lng: "121.4718713798024",
        name: "中凯城市之光",
        lat: "31.232795176271356"
      }, {
        address: "上海市静安区延安中路470弄2号",
        lng: "121.47313799057146",
        name: "延安中路大型公共绿地",
        lat: "31.23085758899761"
      }, {
        address: "上海市静安区成都北路199号",
        lng: "121.47317392279186",
        name: "恒利国际大厦",
        lat: "31.233173425679293"
      }, {
        address: "上海市静安区延安东路立交桥与延安中路交叉路口往北约110米",
        lng: "121.47296731252456",
        name: "延安公园",
        lat: "31.231050577577133"
      }, {
        address: "大沽路368弄,大沽路398弄,威海路333弄",
        lng: "121.47326375334285",
        name: "中凯城市之光(一至三期)",
        lat: "31.231915161527073"
      }, {
        address: "上海市静安区成都北路129号",
        lng: "121.47366799082235",
        name: "清美鲜食(成都北路店)",
        lat: "31.23219306181424"
      }, {
        address: "上海市静安区成都北路333号",
        lng: "121.47289544808376",
        name: "上海招商局广场",
        lat: "31.234068867161838"
      }, {
        address: "上海市静安区老成都北路7弄30号",
        lng: "121.47335358389385",
        name: "中国共产党第二次全国代表大会会址纪念馆",
        lat: "31.230340377641525"
      }, {
        address: "上海市静安区成都北路165号",
        lng: "121.47344341444484",
        name: "上海市静安区南京西路街道社区卫生服务中心",
        lat: "31.2326330689141"
      }, {
        address: "上海市静安区大沽路346号206室",
        lng: "121.47372188915294",
        name: "南京西路街道社区党群服务中心",
        lat: "31.231876564199673"
      }],
      '杭州市': [{
        address: "浙江省杭州市西湖区文三路90号",
        lng: "120.15250312813247",
        name: "东部软件园",
        lat: "30.284741528047"
      }, {
        address: "浙江省杭州市西湖区朝晖街道中山北园",
        lng: "120.15490160384411",
        name: "小公园(莫干山路)",
        lat: "30.287470283973374"
      }, {
        address: "浙江省杭州市西湖区马塍路36-9号",
        lng: "120.15330262003636",
        name: "西湖区马塍路开立方咖啡(崇文公寓店)",
        lat: "30.287540450971857"
      }, {
        address: "浙江省杭州市西湖区西溪街道马塍路36-5号",
        lng: "120.15332058614655",
        name: "茅台酱香万家共享(马塍路店)",
        lat: "30.287462487637086"
      }, {
        address: "杭州市西湖区莫干山路245号",
        lng: "120.1551531293869",
        name: "邮电新村",
        lat: "30.28658149760478"
      }, {
        address: "浙江省杭州市西湖区马塍路36号",
        lng: "120.15360804390974",
        name: "西湖区西溪环卫所",
        lat: "30.28799263707933"
      }, {
        address: "杭州市西湖区莫干山路339号",
        lng: "120.15456923080542",
        name: "建工新村",
        lat: "30.28839024726183"
      }, {
        address: "杭州市西湖区马塍路36号",
        lng: "120.15224261953458",
        name: "崇文公寓",
        lat: "30.287057077287383"
      }, {
        address: "浙江省杭州市西湖区马塍路36号",
        lng: "120.15314092504455",
        name: "火炬高新科技园",
        lat: "30.288039414832348"
      }],
      '成都市': [{
        address: "成都市青羊区文翁路98号",
        lng: "104.06719314092445",
        name: "成都图书馆",
        lat: "30.658921402701353"
      }, {
        address: "成都市青羊区文庙后街63号",
        lng: "104.06580076738398",
        name: "文庙后街63号院",
        lat: "30.659100028669368"
      }, {
        address: "成都市青羊区文庙前街93号",
        lng: "104.06435449551292",
        name: "成都石室中学(文庙校区)",
        lat: "30.65981452920717"
      }, {
        address: "四川省成都市青羊区文庙前街93号",
        lng: "104.0648575465985",
        name: "成都石室中学-成都四中",
        lat: "30.65840882198544"
      }, {
        address: "文庙后街82号",
        lng: "104.06585466571457",
        name: "文庙后街82号院",
        lat: "30.66005528362151"
      }, {
        address: "四川省成都市青羊区文翁路139号-附4",
        lng: "104.06658229317766",
        name: "力迅领筑大厦",
        lat: "30.659698034918268"
      }, {
        address: "四川省成都市青羊区文翁路139号-附3号",
        lng: "104.06660025928785",
        name: "优可云端超市(人民公园店)",
        lat: "30.65976016522334"
      }, {
        address: "四川省成都市青羊区文庙后街63号附3号",
        lng: "104.06598042848597",
        name: "意峰广告印务",
        lat: "30.659154393028235"
      }, {
        address: "四川省成都市青羊区陕西街239号",
        lng: "104.06649246262666",
        name: "山水S酒店(天府广场店)",
        lat: "30.660466894604248"
      }, {
        address: "四川省成都市青羊区文庙后街80号",
        lng: "104.06566602155748",
        name: "中国信通院成渝信息通信研究院",
        lat: "30.659705801208617"
      }]
    }
    return list[obj.cityName||obj.name]
  }



}

export default new LocationClass();
