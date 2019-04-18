import React from "react";

class ActionBoxChild extends React.Component {
  render() {
    let actionBoxChildP = this.props["tekst"];
    if (actionBoxChildP) {
      actionBoxChildP = (
        <p className="action-box-children-res">{actionBoxChildP}</p>
      );
    }

    return (
      <section className="action-box-children">
        {this.props.children.map((icontext, i) => {
          return icontext;
        })}
        {actionBoxChildP}
      </section>
    );
  }
}

export default ActionBoxChild;
