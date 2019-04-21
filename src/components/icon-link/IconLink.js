import React from "react";
import "./icon-link.scss";

class IconLink extends React.Component {
  render() {
    let iconLinkIcon = this.props["img"];
    if (iconLinkIcon) {
      iconLinkIcon = (
        <img
          src={iconLinkIcon.url_full}
          alt={iconLinkIcon.attribute_alt}
          className="headerIcon"
        />
      );
    }
    let iconLinkText = this.props["a_ext"];
    if (iconLinkText) {
      iconLinkText = <a href="#">{iconLinkText}</a>;
    }

    return (
      <article className="icon-link">
        <section className="icon-link-icon">{iconLinkIcon}</section>
        <section className="icon-link-text">{iconLinkText}</section>
      </article>
    );
  }
}

export default IconLink;
