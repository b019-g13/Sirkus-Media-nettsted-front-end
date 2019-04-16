import React from "react";
import "./process.scss";

class Process extends React.Component {
  render() {
    return (
      <section className="process">
        <div className="process-inner layout-boxed">
          <h2>{this.props["overskrift-2"]}</h2>

          {this.props.children.map((processstep, i) => {
            return processstep;
          })}
        </div>
      </section>
    );
  }
}

export default Process;
