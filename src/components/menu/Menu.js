import React from "react";
import "./menu.scss";

class Menu extends React.Component {
  render() {
    return (
      <nav className="nav">
        <h1>{this.props.h1}</h1>
        <p>{this.props.navText}</p>
        <button>{this.props.navButton}</button>
      </nav>
    );
  }
}

export default Menu;
