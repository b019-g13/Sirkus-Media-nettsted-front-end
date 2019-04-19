import React from "react";

class ContactForm extends React.Component {
  render() {
    let contactFormh2 = this.props["overskrift-2"];
    if (contactFormh2) {
      contactFormh2 = <h2>{contactFormh2}</h2>;
    }

    let contactFormName = this.props["tekst"][0];
    if (contactFormName) {
      contactFormName = <label htmlFor="name">{contactFormName}</label>;
    } else {
      contactFormName = <label htmlFor="name">Navn</label>;
    }

    let contactFormCompanyname = this.props["tekst"][1];
    if (contactFormCompanyname) {
      contactFormCompanyname = (
        <label htmlFor="companyname">{contactFormCompanyname}</label>
      );
    } else {
      contactFormCompanyname = (
        <label htmlFor="companyname">Bedriftsnavn</label>
      );
    }

    let contactFormMail = this.props["tekst"][2];
    if (contactFormMail) {
      contactFormMail = <label htmlFor="mail">{contactFormMail}</label>;
    } else {
      contactFormMail = <label htmlFor="mail">E-post</label>;
    }

    let contactFormNumber = this.props["tekst"][3];
    if (contactFormNumber) {
      contactFormNumber = <label htmlFor="number">{contactFormNumber}</label>;
    } else {
      contactFormNumber = <label htmlFor="number">Mobil</label>;
    }

    let contactFormButton = this.props["knapp-intern"];
    if (contactFormButton) {
      contactFormButton = <button type="submit">{contactFormButton}</button>;
    }
    return (
      <section className="contact-form">
        {contactFormh2}
        <hr />
        <form className="contact-us">
          <section className="contact-us-sec">
            <div className="contact-us-sec-col">
              {contactFormName}
              <input type="text" id="name" name="user_name" />
            </div>
            <div className="contact-us-sec-col">
              {contactFormCompanyname}
              <input type="text" id="companyname" name="user_companyname" />
            </div>
          </section>
          <section className="contact-us-sec">
            <div className="contact-us-sec-col">
              {contactFormMail}
              <input type="email" id="mail" name="user_mail" />
            </div>
            <div className="contact-us-sec-col">
              {contactFormNumber}
              <input type="text" id="number" name="user_number" />
            </div>
          </section>
          {contactFormButton}
        </form>
      </section>
    );
  }
}

export default ContactForm;
