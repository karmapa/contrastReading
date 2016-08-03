import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GocaraLJ, Gocara80, Gocara60} from './GocaraText';

class AppContainer extends Component {
  click(e) {
    console.log(e.target);
  }

  scrollTo(id) {
    document.getElementsByClassName('_1-121')[0].scrollIntoView();
    document.getElementsByClassName('_1-121')[1].scrollIntoView();
    document.getElementsByClassName('_1-121')[2].scrollIntoView();
    const a = document.getElementsByClassName('gocLJ')[0];
    const b = document.getElementsByClassName('_1-121')[1];
    console.log(a);
    console.log(b);
  }

  render() {
    return (
      <div id="main">
        <header id="title">
          Tibetain-Chinese Sutra Contrast Reading UI on Gocaraparisuddhi
          <button onClick={this.scrollTo}>test</button>
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
