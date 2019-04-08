import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <article className="Contact">
        <section>
          {this.props.children.map((contactform, i) => {
            return contactform;
          })}
        </section>
        <section>{/* Kart */}</section>
      </article>
    );
  }
}

export default Contact;
