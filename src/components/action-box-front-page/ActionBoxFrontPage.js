import React from "react";
import "./action-box.scss";

class ActionBoxFrontPage extends React.Component {
  render() {
    return (
      <article className="actionBox">
        <h3>{this.props["overskrift-3"]}</h3>
        <div className="actionBox-top">
          <section className="actionBox-top-icon-texts">
            {this.props.children.map((icontext, i) => {
              return icontext;
            })}
          </section>
          <section className="actionBox-top-info">
            {/* <img
              src={this.props.actionBoxLeadsIcon.url}
              alt={this.props.actionBoxLeadsIcon.attribute_alt}
              className="leadsIcon"
            /> */}
            <p className="actionBox-top-info-results">
              {this.props["tekst"][0]}
            </p>
            <p className="actionBox-top-info-results">
              {this.props["tekst"][1]}
            </p>
            <p className="actionBox-top-info-results">
              {this.props["tekst"][2]}
            </p>
          </section>
          {/* <img
              src={this.props.actionBoxACPLIcon.url}
              alt={this.props.actionBoxACPLIcon.attribute_alt}
              className="leadsIcon"
            /> */}
          {/* <img
              src={this.props.actionBoxCampaignIcon.url}
              alt={this.props.actionBoxCampaignIcon.attribute_alt}
              className="leadsIcon"
            /> */}
        </div>
        <div className="actionBox-bottom">
          <hr />
          <section className="actionBox-bottom-content">
            <h2>{this.props["overskrift-2"]}</h2>
            <p>{this.props["tekst"][3]}</p>
          </section>
        </div>
        <p className="acplInformation">{this.props["tekst"][4]}</p>
      </article>
    );
  }
}

export default ActionBoxFrontPage;
