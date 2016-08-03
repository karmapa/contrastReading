import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GocaraLJ, Gocara80, Gocara60} from './GocaraText';

class AppContainer extends Component {
  highlight(obj) {

  }

  clearOldHighlight(obj) {
    if (0 === obj.lastClickedClassName) {
      return;
    }
  }

  scrollToId(obj) {
    console.log(obj);
    if ('' === obj.clickedSutraName) {
      return;
    }
    const idx = obj.contrastList.indexOf(obj.clickedSutraName);
    for (let i = 0; i < obj.contrastList.length; i++) {
      if (idx !== i) {
        document.getElementsByClassName(obj.clickedClassName)[i].scrollIntoView();
      }
    }
  }

  render() {
    this.scrollToId(this.props.contrast);
    this.clearOldHighlight(this.props.contrast);
    this.highlight(this.props.contrast);
    return (
      <div id="main">
        <header id="title">
          Tibetain-Chinese Sutra Contrast Reading UI on Gocaraparisuddhi
        </header>
        <div id="text">
          <div id="textTop">
            <div id="textTopTitle" className="textTitle">
              <span>麗江大藏經</span>
            </div>
            <div id="textTopContent" className="textContent">
              <GocaraLJ />
            </div>
          </div>
          <div id="textMiddle">
            <div id="textTopTitle" className="textTitle">
              <span>八十華嚴</span>
            </div>
            <div id="textTopContent" className="textContent">
              <Gocara80 />
            </div>
          </div>
          <div id="textBottom">
            <div id="textTopTitle" className="textTitle">
              <span>六十華嚴</span>
            </div>
            <div id="textTopContent" className="textContent">
              <Gocara60 />
            </div>
          </div>
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
