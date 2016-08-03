import store from '../../store';
import {sutraClicked} from '../../reducers/contrast.js';

export function getEvent(e) {
  console.log(e.target);
  store.dispatch(sutraClicked(e));
  console.log(store.getState().contrast);
}
