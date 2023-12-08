import {getOpen} from './request'

export const mGpsLocation = params => {
  Object.assign(params, {
    apiUrl: 'gps/location',
    gpsType: 'baidu'
  });
  return getOpen(params);
}