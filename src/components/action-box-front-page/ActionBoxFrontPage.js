import React from "react";
import "../action-box/action-box.scss";

class ActionBoxFrontPage extends React.Component {
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

    let actionBoxBottomh2 = this.props["overskrift-2"];
    if (actionBoxBottomh2) {
      actionBoxBottomh2 = <h2>{actionBoxBottomh2}</h2>;
    }

    let actionBoxFrontPageP1 = this.props["tekst"][3];
    if (actionBoxFrontPageP1) {
      actionBoxFrontPageP1 = <p>{actionBoxFrontPageP1}</p>;
    }

    let actionBoxFrontPageP2 = this.props["tekst"][4];
    if (actionBoxFrontPageP2) {
      actionBoxFrontPageP2 = <p>{actionBoxFrontPageP2}</p>;
    }
    return (
      <article className="action-box">
        <div className="action-box-inner layout-boxed">
          {actionBoxInnerh3}
          <div className="action-box-top">
          {this.state.children.map(child => {
            return child;
            })}
          </div>
          <div className="action-box-bottom">
            <hr />
            <section className="action-box-bottom-content">
              {actionBoxBottomh2}
              {actionBoxFrontPageP1}
            </section>
          </div>
          <div className="acplInformation">{actionBoxFrontPageP2}</div>
        </div>
      </article>
    );
  }
}

export default ActionBoxFrontPage;
