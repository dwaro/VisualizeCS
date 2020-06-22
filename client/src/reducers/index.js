import { combineReducers } from 'redux';
import activeAlgorithmReducer from './activeAlgorithmReducer';

export default combineReducers({
  activeAlgorithm: activeAlgorithmReducer,
});
