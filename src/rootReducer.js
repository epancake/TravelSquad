import { combineReducers } from 'redux';

import appData from "./components/reducer"

const rootReducer = combineReducers({
  appData,
});

export default rootReducer;
