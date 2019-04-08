import React from "react";
import "../process/process.scss";

class ProcessStep extends React.Component {
  render() {
    return (
      <section className="process-step">
        <section className="process-step-left">
          {/* <img
            src="../images/undraw_software_engineer_lvl5.png"
            alt={this.props.processIllustration.attribute_alt}
            className="headerIcon"
          /> */}
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
