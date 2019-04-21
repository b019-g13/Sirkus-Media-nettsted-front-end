import React from "react";
import "./footer.scss";
import IconText from "../icon-text/IconText";

class Footer extends React.Component {
  componentWillMount() {
    this.setState({
      children: []
    });

    if (this.props.children != null) {
      this.setState({
        children: this.props.children
      });
    }
  }
  render() {
    let footerLogo = this.props["img"];
    if (footerLogo) {
      footerLogo = (
        <img
          src={footerLogo.url_full}
          alt={footerLogo.attribute_alt}
          className="headerIcon"
        />
      );
    }

    let footerP1;
    let footerP2;
    let footerP3;
    if (this.props["p"]) {
      footerP1 = this.props["p"][0];
      if (footerP1) {
        footerP1 = <p>{footerP1}</p>;
      }
      footerP2 = this.props["p"][1];
      if (footerP2) {
        footerP2 = <p>{footerP2}</p>;
      }
      footerP3 = this.props["p"][2];
      if (footerP3) {
        footerP3 = <p>{footerP3}</p>;
      }
    }

    let footerAdress = null;
    this.state.children.map(child => {
      if (child.type == IconText && footerAdress == null) {
        // Save component in variable
        footerAdress = child;

        // Remove component from the children array
        const indexOfChild = this.state.children.indexOf(child);
        this.state.children.splice(indexOfChild, 1);
      }
    });

    let footerA1;
    let footerA2;
    if (this.props["a_int"]) {
      footerA1 = this.props["a_int"][0];
      if (footerA1) {
        footerA1 = <a href="#">{footerA1}</a>;
      }
      footerA2 = this.props["a_int"][1];
      if (footerA2) {
        footerA2 = <a href="#">{footerA2}</a>;
      }
    }
    return (
      <footer className="footer">
        <div className="footer-inner layout-boxed">
          <section className="footer-inner-left">
            <div className="footer-inner-left-logo">
              {footerLogo}
              {footerP1}
            </div>
            <div className="footer-inner-left-links">
              {footerAdress}
              {footerA1}
              {footerA2}
            </div>
            {footerP2}
          </section>
          <section className="footer-inner-right">
            {this.state.children.map(child => {
              return child;
            })}
          </section>
        </div>
        <div className="footer-copyright">{footerP3}</div>
      </footer>
    );
  }
}

export default Footer;
