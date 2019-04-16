import React from "react";
import "./contact.scss";
import "../contact-form/contact-form.scss";

class Contact extends React.Component {
  render() {
    return (
      <article className="contact layout-boxed">
        {this.props.children.map((contactform, i) => {
          return contactform;
        })}
        <section className="contact-map">
          <img
            src={this.props.bilde.url_full}
            alt={this.props.bilde.attribute_alt}
          />
        </section>
      </article>
    );
  }
}

export default Contact;
