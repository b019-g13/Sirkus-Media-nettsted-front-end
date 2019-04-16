import React from "react";
import "./process.scss";

class Process extends React.Component {
  render() {
    return (
      <article className="process layout-boxed">
        <h2>{this.props["overskrift-2"]}</h2>

        {this.props.children.map((processstep, i) => {
          return processstep;
        })}
      </article>
    );
  }
}

export default Process;
