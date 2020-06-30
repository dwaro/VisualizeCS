import axios from 'axios';
import { SORT_DATA } from './types';

export const sortData = (data) => async (dispatch) => {
  let response = await axios.get(`/api/sort?${data}`);
  dispatch({ type: SORT_DATA, payload: response.data });
};
