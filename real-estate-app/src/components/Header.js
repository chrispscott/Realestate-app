import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo"> Home Sweet home </div>
        <nav>
          <a href="#">Create ads</a>
          <a href="#">About us</a>
          <a href="#">login</a>
          <a href="#" className="register-btn">
            Register
          </a>
        </nav>
      </header>
    );
  }
}
