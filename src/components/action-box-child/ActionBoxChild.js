import React from "react";

class ActionBoxChild extends React.Component {
  render() {
    return (
      <section className="action-box-children">
        {this.props.children.map((icontext, i) => {
          return icontext;
        })}
        <p className="action-box-children-res">{this.props["tekst"]}</p>
      </section>
    );
  }
}

export default ActionBoxChild;
