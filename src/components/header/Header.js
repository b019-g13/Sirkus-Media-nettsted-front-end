import React from "react";
import "./header.scss";
import IconText from "../icon-text/IconText";

class Header extends React.Component {
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
    let headerLefth1 = this.props["h1"];
    if (headerLefth1) {
      headerLefth1 = <h1>{headerLefth1}</h1>;
    }

    let headerLeftButton = this.props["a_int"];
    if (headerLeftButton) {
      headerLeftButton = (
        <a href="#" className="button">
          {headerLeftButton}
        </a>
      );
    }

    let headerContactInfo1 = this.props["tekst"][1];
    if (headerContactInfo1) {
      headerContactInfo1 = <p>{headerContactInfo1}</p>;
    }

    let headerLeftIconText = null;
    this.state.children.map(child => {
      if (child.type == IconText && headerLeftIconText == null) {
        // Save component in variable
        headerLeftIconText = <div className="contact-number">{child}</div>;

        // Remove component from the children array
        const indexOfChild = this.state.children.indexOf(child);
        this.state.children.splice(indexOfChild, 1);
      }
    });

    let headerRightImg = this.props["img"];
    if (headerRightImg) {
      headerRightImg = (
        <img
          src={headerRightImg.url_full}
          alt={headerRightImg.attribute_alt}
          className="headerIcon"
        />
      );
    }

    return (
      <header className="header">
        <div className="header-inner layout-boxed">
          <section className="header-left">
            {headerLefth1}
            {headerLeftP}
            {headerLeftButton}
            <section className="header-contact-info">
              {headerContactInfo1}
              {headerLeftIconText}
            </section>
          </section>
          <section className="header-right">{headerRightImg}</section>
          {this.state.children.map(child => {
            return child;
          })}
        </div>
      </header>
    );
  }
}

export default Header;
