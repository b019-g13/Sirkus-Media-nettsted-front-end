import React from "react";
import "../process/process.scss";

class ProcessStep extends React.Component {
  render() {
    let processStepImg = this.props["bilde"];
    if (processStepImg) {
      processStepImg = (
        <img
          src={processStepImg.url_full}
          alt={processStepImg.attribute_alt}
          className="headerIcon"
        />
      );
    }

    let processSteph3 = this.props["overskrift-3"];
    if (processSteph3) {
      processSteph3 = <h3>{processSteph3}</h3>;
    }

    let processStepP = this.props["tekst"];
    if (processStepP) {
      processStepP = <p>{processStepP}</p>;
    }

    return (
      <article className="process-step">
        <section className="process-step-left">{processStepImg}</section>
        <section className="process-step-right">
          {processSteph3}
          {processStepP}
        </section>
      </article>
    );
  }
}

export default ProcessStep;
