import { createSlice } from "@reduxjs/toolkit";

interface addressModel{
  name: string,
  cityName: string,
  cityId: string,
  latitude: number,
  longitude: number,
}
interface mode {
  startAddress:addressModel,
  nowLocBD:addressModel,
}
const initialState:mode = {
  startAddress: {
    name: "",
    cityName: "",
    cityId: "",
    latitude: 0,
    longitude: 0,
  },
  nowLocBD: {
    name: "",
    cityName: "",
    cityId: "",
    latitude: 0,
    longitude: 0,
  },
};

export const globalDataSlice = createSlice({
  name: "globalData",
  initialState,
  reducers: {
    updateGlobalData(state, action) {
      Object.keys(action.payload).forEach((name) => {
        state[name] = action.payload[name];
      });
    },
  },
});

export const { updateGlobalData } = globalDataSlice.actions;
export default globalDataSlice.reducer;
