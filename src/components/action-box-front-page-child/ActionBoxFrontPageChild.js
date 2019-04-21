import React from "react";

class ActionBoxChild extends React.Component {
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
    let actionBoxChildP = this.props["p"];
    if (actionBoxChildP) {
      actionBoxChildP = (
        <p className="action-box-children-res">{actionBoxChildP}</p>
      );
    }

    return (
      <section className="action-box-children">
        {this.state.children.map(child => {
          return child;
        })}
        {actionBoxChildP}
      </section>
    );
  }
}

export default ActionBoxChild;
