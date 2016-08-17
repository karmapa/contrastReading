const initialState = {
  clickedClassName: 0,
  clickedSutraName: '',
  lastClickedClassName: 0,
  contrastList: ['gocLJ', 'goc80', 'goc60'],
  highlight: 'highlight',
  panelLeft: true,
  panelMiddle: true,
  panelRight: true,
  activatedPanel: ['gocLJ', 'goc80', 'goc60'],
  elementClientY: 0
};

const definedActivatedPanel = (left, middle, right, list) => {
  let arr = [];
  if (true === left) {
    arr.push(list[0]);
  }
  if (true === middle) {
    arr.push(list[1]);
  }
  if (true === right) {
    arr.push(list[2]);
  }
  return arr;
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
          lastClickedClassName: state.clickedClassName,
          elementClientY: action.e.clientY
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
        const arr = definedActivatedPanel(!state.panelLeft, state.panelMiddle, state.panelRight, state.contrastList);
        return {
          ...state,
          activatedPanel: arr,
          panelLeft: !state.panelLeft
        };
      } else {
        const arr = definedActivatedPanel(!state.panelLeft, state.panelMiddle, state.panelRight, state.contrastList);
        return {
          ...state,
          activatedPanel: arr,
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
        const arr = definedActivatedPanel(state.panelLeft, !state.panelMiddle, state.panelRight, state.contrastList);
        return {
          ...state,
          activatedPanel: arr,
          panelMiddle: !state.panelMiddle
        };
      } else {
        const arr = definedActivatedPanel(state.panelLeft, !state.panelMiddle, state.panelRight, state.contrastList);
        return {
          ...state,
          activatedPanel: arr,
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
        const arr = definedActivatedPanel(state.panelLeft, state.panelMiddle, !state.panelRight, state.contrastList);
        return {
          ...state,
          activatedPanel: arr,
          panelRight: !state.panelRight
        };
      } else {
        const arr = definedActivatedPanel(state.panelLeft, state.panelMiddle, !state.panelRight, state.contrastList);
        return {
          ...state,
          activatedPanel: arr,
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
