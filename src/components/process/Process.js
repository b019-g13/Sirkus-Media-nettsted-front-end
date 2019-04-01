import React from "react";
import "./process.scss";

class Process extends React.Component {
  render() {
    console.log("process props", this.props.children);

    return (
      <article className="process">
        <h2>{this.props.processHeading}</h2>

        {this.props.children.map((processstep, i) => {
          return processstep;
        })}
      </article>
    );
  }
}

export default Process;
