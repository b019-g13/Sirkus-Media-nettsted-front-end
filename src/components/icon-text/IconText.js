import React from "react";

class IconText extends React.Component {
  render() {
    return (
      <section className="icon-text">
        <h3>{this.props["overskrift-3"]}</h3>
        <p>{this.props["tekst"]}</p>
      </section>
    );
  }
}

export default IconText;
