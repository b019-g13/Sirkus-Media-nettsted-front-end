import React from "react";
import "./action-box.scss";

class ActionBoxFrontPage extends React.Component {
  render() {
    let actionBoxInnerh3 = this.props["h3"];
    if (actionBoxInnerh3) {
      actionBoxInnerh3 = <h3>{actionBoxInnerh3}</h3>;
    }
    return (
      <article className="action-box">
        <div className="action-box-inner layout-boxed">
          {actionBoxInnerh3}
          {this.props.children.map(child => {
            return child;
          })}
        </div>
      </article>
    );
  }
}

export default ActionBoxFrontPage;
