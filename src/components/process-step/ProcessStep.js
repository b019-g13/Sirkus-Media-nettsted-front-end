import React from "react";
import "../process/process.scss";

class ProcessStep extends React.Component {
  render() {
    return (
      <section className="process-step">
        <section className="process-step-left">
          <img
            src={this.props.bilde.url_full}
            alt={this.props.bilde.attribute_alt}
          />
        </section>
        <section className="process-step-right">
          <h3>{this.props["overskrift-3"]}</h3>
          <p>{this.props["tekst"]}</p>
        </section>
      </section>
    );
  }
}

export default ProcessStep;
