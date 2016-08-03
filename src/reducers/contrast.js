const initialState = {
  clickedClassName: 0,
  clickedSutraName: '',
  lastClickedClassName: 0,
  contrastList: ['gocLJ', 'goc80', 'goc60']
};

const contrast = (state = initialState, action) => {
  switch (action.type) {
    case 'SUTRACLICKED':
      if (action.e) {
        const arr = action.e.target.className.split(' ');
        return {
          ...state,
          clickedClassName: arr[0],
          clickedSutraName: arr[1],
          lastClickedClassName: state.clickedClassName
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
