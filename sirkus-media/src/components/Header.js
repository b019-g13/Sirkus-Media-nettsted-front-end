import React from "react";

class HeaderComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>
          <span>{this.props.headline}</span>
        </h1>
        <p>{this.props.paragraph}</p>
      </React.Fragment>
    );
  }
}

export default HeaderComponent;
