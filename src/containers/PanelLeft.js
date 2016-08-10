import React, {Component} from 'react';
import {GocaraLJ} from './GocaraText';
import Resizable from 'react-resizable-box';

class PanelLeft extends Component {
  render() {
    return (
      <Resizable width="33%" minWidth={100} height="100%" isResizable={
        {top:false, right:true, bottom:false,
        left:false, topRight:false, bottomRight:false,
        bottomLeft:false, topLeft:false}}>
        <span id="gocLJRender">
          <div id="gocLJTitle">
            <span>麗江大藏經</span>
          </div>
          <div id="gocLJContent">
            <GocaraLJ />
          </div>
        </span>
      </Resizable>
    );
  }
}

export default PanelLeft;
