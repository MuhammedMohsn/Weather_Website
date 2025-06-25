import { Set_Error, Set_Loading, Get_Weather } from "./types";
import { URL, API_key } from "../API";
// define action creators
let set_loading = () => {
  return { type: Set_Loading };
};
let get_weather = (data) => {
  return { type: Get_Weather, payload: data };
};
let set_error = (error_msg) => {
  return { type: Set_Error, payload: error_msg };
};
// define async action
let fetch_weather_data = (city) => {
  return async (dispatch) => {
    dispatch(set_loading());
    let res = await fetch(`${URL}?q=${city}&appid=${API_key}`);
    try {
      let data = await res.json();
      dispatch(get_weather(data));
    } catch (err) {
      dispatch(set_error(err.message));
    }
  };
};
export default fetch_weather_data;
