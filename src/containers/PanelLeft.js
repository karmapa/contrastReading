import React, {Component} from 'react';
import {GocaraLJ} from './GocaraText';
import Resizable from 'react-resizable-box';
import {panelLeftSwitcher} from '../reducers/contrast.js';
import {connect} from 'react-redux';
import store from '../store';

class PanelLeftContainer extends Component {
  panelSwitcher() {
    store.dispatch(panelLeftSwitcher());
  }

  render() {
    let panelWidth = '33%';
    let resizable = true;
    if (1 === this.props.contrast.activatedPanel.length) {
      panelWidth = '100%';
      resizable = false;
    } else if (2 === this.props.contrast.activatedPanel.length) {
      panelWidth = '50%';
    }
    if (this.props.contrast.panelLeft) {
      return (
        <Resizable width={panelWidth} minWidth={100} height="100%" isResizable={
          {top:false, right:resizable, bottom:false,
          left:false, topRight:false, bottomRight:false,
          bottomLeft:false, topLeft:false}}>
          <span id="gocLJRender">
            <div id="gocLJTitle" onClick={this.panelSwitcher}>麗江大藏經</div>
            <div id="gocLJContent">
              <GocaraLJ />
            </div>
          </span>
        </Resizable>
      );
    } else {
      return (
        <span className="titleClose" onClick={this.panelSwitcher}>麗江大藏經</span>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    contrast: state.contrast
  };
};

const PanelLeft = connect(mapStateToProps)(PanelLeftContainer);

export default PanelLeft;
