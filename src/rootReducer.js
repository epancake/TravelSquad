import { combineReducers } from 'redux';

import message from "./components/reducer"

const rootReducer = combineReducers({
  message,
});

export default rootReducer;
