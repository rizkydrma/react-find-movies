import { axios } from "libraries";
import { BASE_URL, API_KEY } from "modules/api";

export const getData = (query) => async (dispatch) => {
  try {
    dispatch({
      type: "AWAITING_DATA",
    });
    const response = await axios.get(BASE_URL + API_KEY + query);
    const results = response.results;
    dispatch({
      type: "SUCCESS_DATA",
      payload: results,
    });
  } catch (e) {
    dispatch({
      type: "REJECTED_DATA",
    });
  }
};
