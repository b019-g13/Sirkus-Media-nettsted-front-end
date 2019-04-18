import React from "react";
import "../about-us/about-us.scss";

class AboutUs extends React.Component {
  render() {
    let aboutUsLeftImg = this.props["bilde"];
    if (aboutUsLeftImg) {
      aboutUsLeftImg = (
        <img src={aboutUsLeftImg.url_full} alt={aboutUsLeftImg.attribute_alt} />
      );
    }

    let aboutUsRighth2 = this.props["overskrift-2"];
    if (aboutUsRighth2) {
      aboutUsRighth2 = <h2>{aboutUsRighth2}</h2>;
    }

    let aboutUsRightP = this.props["tekst"][0];
    if (aboutUsRightP) {
      aboutUsRightP = <p>{aboutUsRightP}</p>;
    }

    let aboutUsRightP1 = this.props["tekst"][1];
    if (aboutUsRightP1) {
      aboutUsRightP1 = <p>{aboutUsRightP1}</p>;
    }

    return (
      <React.Fragment>
        <section className="about-us-left">{aboutUsLeftImg}</section>
        <section className="about-us-right">
          {aboutUsRighth2}
          {aboutUsRightP}
          {aboutUsRightP1}
        </section>
      </React.Fragment>
    );
  }
}

export default AboutUs;
