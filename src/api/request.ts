import Taro from '@tarojs/taro'
import md5 from "@lib/md5"
import { queryError,number } from '@utils/utils'

interface ResponseData<T = any> {
  code: number|string
  data: T
  message: string
  [key: string]: any
}

let getSig = (params):string=>{
  let joinedStr = ''
  Object.keys(params).sort().forEach(key=>{
    if (params[key] == null) params[key] = ''
    joinedStr += key + params[key]
  })
  return md5(number + joinedStr + number).slice(0, 30);
}

const getParams = (options)=>{
  delete options.apiUrl;
  options.sig = getSig(options);
  return options;
}

const request = (model): Promise<ResponseData> => {
  let reqUrl = model.apiUrl;
  return new Promise<ResponseData>((resolve, reject) => {
    Taro.request({
      url: reqUrl,
      data: getParams(model),
      method: 'GET',
      success: (res: Taro.request.SuccessCallbackResult) => {
        if (res.statusCode * 1 != 200) {
          reject(res);
          return;
        }
        resolve(res.data);
      },
      fail: (err: TaroGeneral.CallbackResult) => {
        queryError('网络错误请重试')
        reject(err)
      }
    })
  })
}
export const getOpen = params => {
  return request({ ...params, apiUrl: 'https://fangfang.d.kuaimazhixing.com/frontapi/' + params.apiUrl });
}