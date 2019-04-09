import React from "react";

class ContactForm extends React.Component {
  render() {
    return (
      <section className="contact-form">
        <h2>{this.props["overskrift-2"]}</h2>
        <hr />
        <form className="contact-us">
          <section className="contact-us-sec">
            <div className="contact-us-sec-col">
              <label htmlFor="name">{this.props["tekst"][0]}</label>
              <input type="text" id="name" name="user_name" />
            </div>
            <div className="contact-us-sec-col">
              <label htmlFor="companyname">{this.props["tekst"][1]}</label>
              <input type="text" id="companyname" name="user_companyname" />
            </div>
          </section>
          <section className="contact-us-sec">
            <div className="contact-us-sec-col">
              <label htmlFor="mail">{this.props["tekst"][2]}</label>
              <input type="email" id="mail" name="user_mail" />
            </div>
            <div className="contact-us-sec-col">
              <label htmlFor="number">{this.props["tekst"][3]}</label>
              <input type="text" id="number" name="user_number" />
            </div>
          </section>
          <button type="submit">{this.props["knapp-intern"]}</button>
        </form>
      </section>
    );
  }
}

export default ContactForm;
