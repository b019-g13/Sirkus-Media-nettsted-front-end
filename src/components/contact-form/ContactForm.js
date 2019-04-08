import React from "react";

class ContactForm extends React.Component {
  render() {
    return (
      <section>
        <h2>{this.props["overskrift-2"]}</h2>
        <form>
          <input type="text" />
        </form>
      </section>
    );
  }
}

export default ContactForm;
