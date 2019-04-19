import React from "react";
import "./contact.scss";
import "../contact-form/contact-form.scss";

class Contact extends React.Component {
  render() {
    let contactMapImg = this.props["bilde"];
    if (contactMapImg) {
      contactMapImg = (
        <img
          src={contactMapImg.url_full}
          alt={contactMapImg.attribute_alt}
          className="headerIcon"
        />
      );
    }

    let contactMapButton = this.props["ekstern-link"];
    if (contactMapButton) {
      contactMapButton = (
        <a href="#" className="button">
          {contactMapButton}
        </a>
      );
    }
    return (
      <article className="contact layout-boxed">
        {this.props.children.map((contactform, i) => {
          return contactform;
        })}
        <section className="contact-map">
          {contactMapImg}
          {contactMapButton}
        </section>
      </article>
    );
  }
}

export default Contact;
