import React from "react";
import "../action-box/action-box.scss";

class ActionBoxFrontPage extends React.Component {
  render() {
    let actionBoxInnerh3 = this.props["overskrift-3"];
    if (actionBoxInnerh3) {
      actionBoxInnerh3 = <h3>{actionBoxInnerh3}</h3>;
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
            {/* <section className="action-box-top-content"> */}
            {this.props.children.map((children, i) => {
              return children;
            })}
            {/* </section> */}
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
