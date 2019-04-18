import React from "react";
import "../action-box/action-box.scss";

class ActionBoxAboutUs extends React.Component {
  render() {
    let actionBoxChildP = this.props["tekst"][0];
    if (actionBoxChildP) {
      actionBoxChildP = <p>{actionBoxChildP}</p>;
    }

    let actionBoxChildP1 = this.props["tekst"][1];
    if (actionBoxChildP1) {
      actionBoxChildP1 = <p>{actionBoxChildP1}</p>;
    }

    return (
      <article className="action-box">
        <div className="action-box-inner layout-boxed">
          <h3>{this.props["overskrift-3"]}</h3>
          <div className="action-box-left-right-wrapper">
            <section className="action-box-left">
              {this.props.children.map((children, i) => {
                return children;
              })}
            </section>
            <section className="action-box-right">
              {actionBoxChildP}
              {actionBoxChildP1}
            </section>
          </div>
        </div>
      </article>
    );
  }
}

export default ActionBoxAboutUs;
