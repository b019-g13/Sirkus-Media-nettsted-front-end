import React from "react";

class headingText extends React.Component {
  render() {
    let headingTexth3 = this.props["h3"];
    if (headingTexth3) {
      headingTexth3 = <h3>{headingTexth3}</h3>;
    }
    let headingTextText = this.props["p"];
    if (headingTextText) {
      headingTextText = <p>{headingTextText}</p>;
    }

    return (
      <article className="heading-text">
        <section className="heading-text-h3">{headingTexth3}</section>
        <section className="heading-text-text">{headingTextText}</section>
      </article>
    );
  }
}

export default headingText;
