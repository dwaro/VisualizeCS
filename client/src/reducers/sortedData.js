import { SORT_DATA } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case SORT_DATA:
      return action.payload || false; // if payload is empty string "" it returns false
    default:
      return state;
  }
}
