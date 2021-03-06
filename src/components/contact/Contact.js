import React from "react";
import "./contact.scss";
import "../contact-form/contact-form.scss";

class Contact extends React.Component {
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
    let contactMapImg = this.props["img"];
    if (contactMapImg) {
      contactMapImg = (
        <img
          src={contactMapImg.url_full}
          alt={contactMapImg.attribute_alt}
          className="headerIcon"
        />
      );
    }

    let contactMapButton = this.props["a_ext"];
    if (contactMapButton) {
      contactMapButton = (
        <a
          href={contactMapButton.value}
          className="button"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          {contactMapButton.name}
        </a>
      );
    }
    return (
      <article className="contact layout-boxed">
        {this.state.children.map(child => {
          return child;
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
