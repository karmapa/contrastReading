import store from '../../store';
import {sutraClicked} from '../../reducers/contrast.js';

export function getEvent(e) {
  store.dispatch(sutraClicked(e));
}
