import React from "react";

class IconLink extends React.Component {
  render() {
    let iconLink = this.props["intern-link"];
    if (iconLink) {
      iconLink = <a href="#">{iconLink}</a>;
    }

    return <section className="icon-link">{iconLink}</section>;
  }
}

export default IconLink;
