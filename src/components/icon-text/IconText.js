import React from "react";

class IconText extends React.Component {
  render() {
    return (
      <section className="icon-text">
        <p>{this.props["tekst"]}</p>
      </section>
    );
  }
}

export default IconText;
