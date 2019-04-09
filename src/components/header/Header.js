import React from "react";
import "./header.scss";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          <section className="header-left">
            <h1>{this.props["overskrift-1"]}</h1>
            <p>{this.props["tekst"][0]}</p>
            <button>{this.props["knapp-intern"]}</button>
            <section className="header-contact-info">
              <p>{this.props["tekst"][1]}</p>
              <p className="contact-number">{this.props["tekst"][2]}</p>
            </section>
          </section>
          <section className="header-right">
            {/* <img
              src={this.props.headerIllustration.url}
              alt={this.props.headerIllustration.attribute_alt}
              className="headerIcon"
            /> */}
            <img
              src="https://via.placeholder.com/300x100"
              className="headerIcon"
            />
          </section>
        </div>
      </header>
    );
  }
}

export default Header;
