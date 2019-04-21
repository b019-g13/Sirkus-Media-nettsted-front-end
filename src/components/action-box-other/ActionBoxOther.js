import React from "react";
import ContactForm from "../contact-form/ContactForm";

class ActionBoxOther extends React.Component {
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
    let ActionBoxContactForm = null;
    this.state.children.map(child => {
      if (child.type == ContactForm && ActionBoxContactForm == null) {
        // Save component in variable
        ActionBoxContactForm = child;

        // Remove component from the children array
        const indexOfChild = this.state.children.indexOf(child);
        this.state.children.splice(indexOfChild, 1);
      }
    });

    let actionBoxChildP1;
    let actionBoxChildP2;
    if (this.props["p"]) {
      actionBoxChildP1 = this.props["p"][0];
      if (actionBoxChildP1) {
        actionBoxChildP1 = <p>{actionBoxChildP1}</p>;
      }
      actionBoxChildP2 = this.props["p"][1];
      if (actionBoxChildP2) {
        actionBoxChildP2 = <p>{actionBoxChildP2}</p>;
      }
    }

    return (
      <React.Fragment>
        <div className="action-box-left-right-wrapper">
          <section className="action-box-left">
            {this.state.children.map(child => {
              return child;
            })}
          </section>
          <section className="action-box-right">
            {ActionBoxContactForm}
            {actionBoxChildP1}
            {actionBoxChildP2}
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default ActionBoxOther;
