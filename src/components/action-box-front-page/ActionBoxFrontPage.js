import React from "react";
import "./action-box.scss";

class ActionBoxFrontPage extends React.Component {
  render() {
    return (
      <article className="action-box">
        <div className="action-box-inner layout-boxed">
          <h3>{this.props["overskrift-3"]}</h3>
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
              <h2>{this.props["overskrift-2"]}</h2>
              <p>{this.props["tekst"][3]}</p>
            </section>
          </div>
          <div className="acplInformation">
            <p>{this.props["tekst"][4]}</p>
          </div>
        </div>
      </article>
    );
  }
}

export default ActionBoxFrontPage;
