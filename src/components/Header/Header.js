import React, { Component } from "react";
import UserSection from './UserSection';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="d-c">
          <div className="logo">Random Logo</div>
          {/* usersection */}
          {/* passed as props from .App (Header)*/}
          <UserSection user={this.props.user}/> 
        </div>
      </header>
    );
  }
}
