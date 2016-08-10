import React, {Component} from 'react';
import {Gocara60} from './GocaraText';
import Resizable from 'react-resizable-box';

class PanelRight extends Component {
  render() {
    return (
      <Resizable width="33%" minWidth={100} height="100%" isResizable={
        {top:false, right:false, bottom:false,
        left:true, topRight:false, bottomRight:false,
        bottomLeft:false, topLeft:false}}>
        <span id="goc60Render">
          <div id="goc60Title">
            <span>六十華嚴</span>
          </div>
          <div id="goc60Content">
            <Gocara60 />
          </div>
        </span>
      </Resizable>
    );
  }
}

export default PanelRight;
