import React from "react";

class IconLink extends React.Component {
  render() {
    return (
      <section className="icon-link">
        <h3>{this.props["overskrift-3"]}</h3>
        <a href="#">{this.props["intern-link"]}</a>
      </section>
    );
  }
}

export default IconLink;
