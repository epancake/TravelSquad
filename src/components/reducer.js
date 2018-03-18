import { TOGGLE_MESSAGE, GET_DATA } from "./actions"

const initialState = {
  messageVisibility: false,
  travelData: [],
};

export default function (state = initialState, action) {
  const { type, data } = action;
  switch(type) {
    case 'TOGGLE_MESSAGE':
      return {
        ...state,
        messageVisibility: !state.messageVisibility,
      };
    case 'GET_DATA':
      return {
        ...state,
        travelData: data,
      };
    default:
      return state;
  }
}
