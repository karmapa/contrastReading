import store from '../../store';
import {sutraClicked} from '../../reducers/contrast.js';

function getClassName (tags) {
  let arr = [];
  for (let i = 0; i < tags.length; i++) {
    arr.push(tags[i].className.split(' ')[1]);
  }
  return arr;
}

export function getEvent(e) {
  const clickedName = e.target.className.split(' ')[0];
  const tags = document.getElementsByClassName(clickedName);
  const tagsArr = getClassName(tags);
  store.dispatch(sutraClicked(e, tagsArr));
}
