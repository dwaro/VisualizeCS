import { FETCH_ALGORITHM } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_ALGORITHM:
      return action.payload || false; // if payload is empty string "" it returns false
    default:
      return state;
  }
}
