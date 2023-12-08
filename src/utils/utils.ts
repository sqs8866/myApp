
import Taro from "@tarojs/taro"
let showQueryError: boolean = false;
export const queryError = (str?: string, back?: any) => {
  if (showQueryError) {
    return;
  }
  showQueryError = true;
  Taro.showModal({
    content: str || '网络错误请重试',
    showCancel: false,
    complete: () => {
      showQueryError = false;
      if (back) Taro.navigateBack({ delta: 1 })
    }
  })
}

export const showModal = (tips: any) => {
  Taro.showModal({
    title: tips.title || '提示',
    content: tips.content || '',
    showCancel: tips.cancel || false,
    complete: (info) => {
      if (tips.callBack) {
        tips.callBack(info);
      }
    }
  })
}

export const loading = {
  show: (title?: string) => {
    Taro.showToast({
      title: title || "加载中",
      icon: "loading",
      mask: true,
      duration: 1000
    })
  },
  hide: () => {
    try {
      Taro.hideToast();
    } catch (error) {
      console.log('loading还是报错')
    }
  }
}

export const getQueryString = (name: string, arg: string) => {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  let r = arg.match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}

export const number = '00590e77-dfab-4e5f-b6bc-0319eac00238'