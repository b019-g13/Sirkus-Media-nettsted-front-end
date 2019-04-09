import React from "react";
import "./contact.scss";
import "../contact-form/contact-form.scss";

class Contact extends React.Component {
  render() {
    return (
      <article className="contact">
        <h2>{this.props["overskrift-2"]}</h2>
        {this.props.children.map((contactform, i) => {
          return contactform;
        })}
        <section className="contact-map">
          <img src="https://i.xdh.no/1adb1ef92f51" />
        </section>
      </article>
    );
  }
}

export default Contact;
