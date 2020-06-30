import { SORT_DATA } from '../actions/types';

function numSwaps(stepsData) {
  let count = 0;
  for (let step of stepsData) {
    let steps = step[0];
    count += steps.length;
  }
  return count;
}

export default function (state = null, action) {
  switch (action.type) {
    case SORT_DATA:
      action.payload['numSwaps'] = numSwaps(action.payload.steps);
      return action.payload || false; // if payload is empty string "" it returns false
    default:
      return state;
  }
}
