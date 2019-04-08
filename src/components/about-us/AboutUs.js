import React from "react";
import "./about-us.scss";

class AboutUs extends React.Component {
  render() {
    return (
      <section className="about-us">
        <section className="about-us-left">
          {/* <img
            src={this.props.aboutUsImage.url}
            alt={this.props.aboutUsImage.attribute_alt}
            className="headerIcon"
          /> */}
        </section>
        <section className="about-us-right">
          <h2>{this.props["overskrift-2"]}</h2>
          <p>{this.props["tekst"]}</p>
        </section>
      </section>
    );
  }
}

export default AboutUs;
