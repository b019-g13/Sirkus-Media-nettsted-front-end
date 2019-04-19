import React from "react";

class IconText extends React.Component {
  render() {
    let iconText = this.props["tekst"];
    if (iconText) {
      iconText = <p>{iconText}</p>;
    }

    return <section className="icon-text">{iconText}</section>;
  }
}

export default IconText;
