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

  render() {
    let actionBoxBottomh2 = this.props["h2"];
    if (actionBoxBottomh2) {
      actionBoxBottomh2 = <h2>{actionBoxBottomh2}</h2>;
    }

    let actionBoxFrontPageP1;
    let actionBoxFrontPageP2;
    if (this.props["p"]) {
      actionBoxFrontPageP1 = this.props["p"][0];
      if (actionBoxFrontPageP1) {
        actionBoxFrontPageP1 = <p>{actionBoxFrontPageP1}</p>;
      }
      actionBoxFrontPageP2 = this.props["p"][1];
      if (actionBoxFrontPageP2) {
        actionBoxFrontPageP2 = <p>{actionBoxFrontPageP2}</p>;
      }
    }

    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default ActionBoxFrontPage;
