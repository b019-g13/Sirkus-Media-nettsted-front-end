import React from "react";
import "./header.scss";

class HeaderComponent extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          <section className="header-left">
            <h1>{this.props.h1}</h1>
            <p>{this.props.headerText}</p>
          <button>{this.props.headerButton}</button>
          <section className="header-contact-info">
            <p>{this.props.headerContactText}</p>
            <p className="contact-number">{this.props.headerContactNumber}</p>
          </section>
        </section>
        <section className="header-right">
          <img
            src={this.props.headerIllustration.url}
            alt=""
            className="headerIcon"
          />
        </section>
        </div>
      </header>
    );
  }
}

export default HeaderComponent;
