import React from "react";
import "./header.scss";

class HeaderComponent extends React.Component {
  render() {
    return (
      <header className="header">
        <section className="header-left">
          <h1>{this.props.h1}</h1>
          <p>{this.props.headerText}</p>
          <button>{this.props.headerButton}</button>
          <p>{this.props.headerContactText}</p>
        </section>
        <section className="header-right">
          <img
            src={this.props.headerIllustration.url}
            alt=""
            className="headerIcon"
          />
        </section>
      </header>
    );
  }
}

export default HeaderComponent;
