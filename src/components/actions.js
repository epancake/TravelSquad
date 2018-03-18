export const GET_DATA = 'GET_DATA';
export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE';

export function getData() {
  return async function(dispatch) {
    const res = await fetch('https://travelsquadback.herokuapp.com/');
    const travelData = await res.json();
    return dispatch({
      type:'GET_DATA',
      data: travelData,
    })
  }
}


export function toggleMessage() {
    return {
      type:'TOGGLE_MESSAGE',
    }
}
