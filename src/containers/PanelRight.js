import React, {Component} from 'react';
import {Gocara60} from './GocaraText';
import Resizable from 'react-resizable-box';
import {panelRightSwitcher} from '../reducers/contrast.js';
import {connect} from 'react-redux';
import store from '../store';

class PanelRightContainer extends Component {
  panelSwitcher() {
    store.dispatch(panelRightSwitcher());
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
    if (this.props.contrast.panelRight) {
      if ((2 === this.props.contrast.activatedPanel.length && this.props.contrast.panelLeft) || 1 === this.props.contrast.activatedPanel.length) {
        return (
          <span id="goc60Render">
            <div id="goc60Title" onClick={this.panelSwitcher}>六十華嚴</div>
            <div id="goc60Content">
              <Gocara60 />
            </div>
          </span>
        );
      } else {
        return (
          <Resizable width={panelWidth} minWidth={100} height="100%" isResizable={
            {top:false, right:false, bottom:false,
            left:resizable, topRight:false, bottomRight:false,
            bottomLeft:false, topLeft:false}}>
            <span id="goc60Render">
              <div id="goc60Title" onClick={this.panelSwitcher}>六十華嚴</div>
              <div id="goc60Content">
                <Gocara60 />
              </div>
            </span>
          </Resizable>
        );
      }
    } else {
      return (
        <span className="titleClose" onClick={this.panelSwitcher}>六十華嚴</span>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    contrast: state.contrast
  };
};

const PanelRight = connect(mapStateToProps)(PanelRightContainer);

export default PanelRight;
