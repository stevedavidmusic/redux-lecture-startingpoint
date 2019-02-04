import React, { Component } from "react";
import Apply from "./Apply";

export default class Promos extends Component {
  render() {
    return <div>
      {/* passed as props from .App (Header)*/}
              <Apply user={this.props.user}/> 
          </div>;
  }
}
