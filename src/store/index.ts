import { configureStore } from '@reduxjs/toolkit'
import globalDataReducer  from './reducers/globalData'
const store = configureStore({
  reducer:{
    globalData: globalDataReducer,
  }
})

export default store