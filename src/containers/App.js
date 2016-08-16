import React, {Component} from 'react';
import {connect} from 'react-redux';
import PanelLeft from './PanelLeft.js';
import PanelMiddle from './PanelMiddle.js';
import PanelRight from './PanelRight.js';

class AppContainer extends Component {
  highlight(obj) {
    if (0 === obj.clickedClassName) {
      return;
    }
    for (let i = 0; i < obj.contrastList.length; i++) {
      const tag = document.getElementsByClassName(obj.clickedClassName)[i];
      if (undefined === tag) {
        return;
      }
      tag.className = obj.clickedClassName + ' ' + obj.contrastList[i]
                      + ' ' + obj.highlight;
    }
  }

  clearOldHighlight(obj) {
    if (0 === obj.lastClickedClassName) {
      return;
    }
    for (let i = 0; i < obj.contrastList.length; i++) {
      const tag = document.getElementsByClassName(obj.lastClickedClassName)[i];
      if (undefined === tag) {
        return;
      }
      tag.className = obj.lastClickedClassName + ' ' + obj.contrastList[i];
    }
  }

  scrollToId(obj) {
    if ('' === obj.clickedSutraName) {
      return;
    }
    const idx = obj.contrastList.indexOf(obj.clickedSutraName);
    for (let i = 0; i < obj.contrastList.length; i++) {
      const tag = document.getElementsByClassName(obj.clickedClassName)[i];
      if (idx !== i && undefined !== tag) {
        tag.scrollIntoView();
        let tagScrolledHeight = document.getElementById(obj.contrastList[i] + 'Content').scrollTop;
        document.getElementById(obj.contrastList[i] + 'Content').scrollTop = tagScrolledHeight - obj.elementClientY + 80;
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.contrast.clickedClassName !== this.props.contrast.clickedClassName
    );
  }

  render() {
    this.scrollToId(this.props.contrast);
    this.clearOldHighlight(this.props.contrast);
    this.highlight(this.props.contrast);
    return (
      <div>
        <header id="title">
          Tibetain-Chinese Sutra Contrast Reading UI on Gocaraparisuddhi
        </header>
        <div id="main">
          <PanelLeft />
          <PanelMiddle />
          <PanelRight />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contrast: state.contrast
  };
};

const App = connect(mapStateToProps)(AppContainer);

export default App;
