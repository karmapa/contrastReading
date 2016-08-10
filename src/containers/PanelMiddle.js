import React, {Component} from 'react';
import {Gocara80} from './GocaraText';

class PanelMiddle extends Component {
  render() {
    return (
        <span id="goc80Render">
          <div id="goc80Title">
            <span>八十華嚴</span>
          </div>
          <div id="goc80Content">
            <Gocara80 />
          </div>
        </span>
    );
  }
}

export default PanelMiddle;
