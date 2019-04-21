import React from "react";
import "./icon-text.scss";

class IconText extends React.Component {
  render() {
    let iconTextIcon = this.props["img"];
    if (iconTextIcon) {
      iconTextIcon = (
        <img
          src={iconTextIcon.url_full}
          alt={iconTextIcon.attribute_alt}
          className="headerIcon"
        />
      );
    }
    let iconTextText = this.props["p"];
    if (iconTextText) {
      iconTextText = <p>{iconTextText}</p>;
    }

    return (
      <article className="icon-text">
        <section className="icon-text-icon">{iconTextIcon}</section>
        <section className="icon-text-text">{iconTextText}</section>
      </article>
    );
  }
}

export default IconText;
