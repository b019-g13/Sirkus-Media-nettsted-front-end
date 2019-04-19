import React from "react";
import "./process.scss";

class Process extends React.Component {
  render() {
    let processh2 = this.props["overskrift-2"];
    if (processh2) {
      processh2 = <h2>{processh2}</h2>;
    }
    return (
      <section className="process">
        <div className="process-inner layout-boxed">
          {processh2}
          {this.props.children.map((processstep, i) => {
            return processstep;
          })}
        </div>
      </section>
    );
  }
}

export default Process;
