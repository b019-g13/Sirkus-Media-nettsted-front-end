import React from "react";
import "./about-us.scss";

class AboutUs extends React.Component {
  render() {
    return (
      <section className="about-us">
        <section className="about-us-left">
          <img
            src={this.props.bilde.url_full}
            alt={this.props.bilde.attribute_alt}
          />
        </section>
        <section className="about-us-right">
          <h2>{this.props["overskrift-2"]}</h2>
          <p>{this.props["tekst"][0]}</p>
          <p>{this.props["tekst"][1]}</p>
        </section>
      </section>
    );
  }
}

export default AboutUs;
