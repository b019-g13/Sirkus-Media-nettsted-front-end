import React from "react";
import "./action-box.scss";

class ActionBoxFrontPage extends React.Component {
  render() {
    return (
      <article className="actionBox">
        <h3>{this.props.actionBoxRestultsHeading}</h3>
        <div className="actionBox-top">
          <section className="actionBox-top-leads">
            <img
              src={this.props.actionBoxLeadsIcon.url}
              alt={this.props.actionBoxLeadsIcon.attribute_alt}
              className="leadsIcon"
            />
            <p className="actionBox-top-text">
              {this.props.actionBoxLeadsText}
            </p>
            <p className="actionBox-top-results">
              {this.props.actionBoxLeadsResults}
            </p>
          </section>
          <section className="actionBox-top-acpl">
            <img
              src={this.props.actionBoxACPLIcon.url}
              alt={this.props.actionBoxACPLIcon.attribute_alt}
              className="leadsIcon"
            />
            <p className="actionBox-top-text">{this.props.actionBoxACPLText}</p>
            <p className="actionBox-top-results">
              {this.props.actionBoxACPLResults}
            </p>
          </section>
          <section className="actionBox-top-campaign">
            <img
              src={this.props.actionBoxCampaignIcon.url}
              alt={this.props.actionBoxCampaignIcon.attribute_alt}
              className="leadsIcon"
            />
            <p className="actionBox-top-text">
              {this.props.actionBoxCampaignText}
            </p>
            <p className="actionBox-top-results">
              {this.props.actionBoxCampaignResults}
            </p>
          </section>
        </div>
        <div className="actionBox-bottom">
          <hr />
          <section className="actionBox-bottom-content">
            <h2>{this.props.actionBoxh2}</h2>
            <p>{this.props.actionBoxParagraph}</p>
          </section>
        </div>
        <p className="acplInformation">{this.props.actionBoxACPLInformation}</p>
      </article>
    );
  }
}

export default ActionBoxFrontPage;
