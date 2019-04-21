import React from "react";
import "./process.scss";

class Process extends React.Component {
  componentWillMount() {
    this.setState({
      children: []
    });

    if (this.props.children != null) {
      this.setState({
        children: this.props.children
      });
    }
  }

  render() {
    let processh2 = this.props["h2"];
    if (processh2) {
      processh2 = <h2>{processh2}</h2>;
    }
    return (
      <section className="process">
        <div className="process-inner layout-boxed">
          {processh2}
          {this.state.children.map(child => {
            return child;
          })}
        </div>
      </section>
    );
  }
}

export default Process;
