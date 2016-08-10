const initialState = {
  clickedClassName: 0,
  clickedSutraName: '',
  lastClickedClassName: 0,
  contrastList: ['gocLJ', 'goc80', 'goc60'],
  highlight: 'highlight',
  panelLeft: true,
  panelMiddle: true,
  panelRight: true,
  activatedPanel: 3
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
    case 'PANELLEFTSWITCHER':
      if (!state.panelRight && !state.panelMiddle) {
        return {
          ...state,
          panelLeft: true
        };
      } else if (true === state.panelLeft) {
        return {
          ...state,
          activatedPanel: --state.activatedPanel,
          panelLeft: !state.panelLeft
        };
      } else {
        return {
          ...state,
          activatedPanel: ++state.activatedPanel,
          panelLeft: !state.panelLeft
        };
      }
    case 'PANELMIDDLESWITCHER':
      if (!state.panelRight && !state.panelLeft) {
        return {
          ...state,
          panelMiddle: true
        };
      } else if (true === state.panelMiddle) {
        return {
          ...state,
          activatedPanel: --state.activatedPanel,
          panelMiddle: !state.panelMiddle
        };
      } else {
        return {
          ...state,
          activatedPanel: ++state.activatedPanel,
          panelMiddle: !state.panelMiddle
        };
      }
    case 'PANELRIGHTSWITCHER':
      if (!state.panelMiddle && !state.panelLeft) {
        return {
          ...state,
          panelRight: true
        };
      } else if (true === state.panelRight) {
        return {
          ...state,
          activatedPanel: --state.activatedPanel,
          panelRight: !state.panelRight
        };
      } else {
        return {
          ...state,
          activatedPanel: ++state.activatedPanel,
          panelRight: !state.panelRight
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

export function panelLeftSwitcher() {
  return {
    type: 'PANELLEFTSWITCHER'
  };
}

export function panelMiddleSwitcher() {
  return {
    type: 'PANELMIDDLESWITCHER'
  };
}

export function panelRightSwitcher() {
  return {
    type: 'PANELRIGHTSWITCHER'
  };
}
