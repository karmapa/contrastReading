import React, {Component} from 'react';
import {Gocara80} from './GocaraText';
import {panelMiddleSwitcher} from '../reducers/contrast.js';
import {connect} from 'react-redux';
import store from '../store';

class PanelMiddleContainer extends Component {
  panelSwitcher() {
    store.dispatch(panelMiddleSwitcher());
  }

  render() {
    if (this.props.contrast.panelMiddle) {
      return (
          <span id="goc80Render">
            <div id="goc80Title" onClick={this.panelSwitcher}>八十華嚴</div>
            <div id="goc80Content">
              <Gocara80 />
            </div>
          </span>
      );
    } else {
      return (
        <span className="titleClose" onClick={this.panelSwitcher}>八十華嚴</span>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    contrast: state.contrast
  };
};

const PanelMiddle = connect(mapStateToProps)(PanelMiddleContainer);

export default PanelMiddle;
