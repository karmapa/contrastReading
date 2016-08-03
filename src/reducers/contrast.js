const initialState = {
  clickedPB: 0,
  clickedSutraName: 'no',
  lastClickedPb: 0
};

const contrast = (state = initialState, action) => {
  switch (action.type) {
    case 'SUTRACLICKED':
      if (action.e) {
        const arr = action.e.target.className.split(' ');
        return {
          ...state,
          clickedPB: arr[0],
          clickedSutraName: arr[1],
          lastClickedPb: state.clickedPB
        };
      } else {
        return {
          ...state,
          test: true
        };
      }
    default:
      return state;
  }
};

export default contrast;

export function sutraClicked(e) {
  return {
    type: 'SUTRACLICKED',
    e: e
  };
}
