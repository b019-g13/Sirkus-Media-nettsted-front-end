import React from "react";

class HeaderComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>
          <span>{this.props.h1}</span>
        </h1>
        <p>{this.props.p}</p>
      </React.Fragment>
    );
  }
}

export default HeaderComponent;
