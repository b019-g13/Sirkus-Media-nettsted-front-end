import React from "react";

class ContactForm extends React.Component {
  render() {
    let contactFormh2 = this.props["h2"];
    if (contactFormh2) {
      contactFormh2 = <h2>{contactFormh2}</h2>;
    }

    let contactFormName;
    let contactFormCompanyname;
    let contactFormMail;
    let contactFormNumber;
    if (this.props["p"]) {
      contactFormName = this.props["p"][0];
      if (contactFormName) {
        contactFormName = <label htmlFor="name">{contactFormName}</label>;
      } else {
        contactFormName = <label htmlFor="name">Navn</label>;
      }
      contactFormCompanyname = this.props["p"][1];
      if (contactFormCompanyname) {
        contactFormCompanyname = (
          <label htmlFor="companyname">{contactFormCompanyname}</label>
        );
      } else {
        contactFormCompanyname = (
          <label htmlFor="companyname">Bedriftsnavn</label>
        );
      }
      contactFormMail = this.props["p"][2];
      if (contactFormMail) {
        contactFormMail = <label htmlFor="mail">{contactFormMail}</label>;
      } else {
        contactFormMail = <label htmlFor="mail">E-post</label>;
      }
      contactFormNumber = this.props["p"][3];
      if (contactFormNumber) {
        contactFormNumber = <label htmlFor="number">{contactFormNumber}</label>;
      } else {
        contactFormNumber = <label htmlFor="number">Mobil</label>;
      }
    }

    let contactFormAction = "";
    let contactFormButton = this.props["a_int"];
    if (contactFormButton) {
      contactFormAction = contactFormButton.value;

      contactFormButton = (
        <button type="submit">{contactFormButton.name}</button>
      );
    }
    return (
      <section id="kontakt" className="contact-form">
        {contactFormh2}
        <hr />
        <form className="contact-us" action={contactFormAction} method="POST">
          <section className="contact-us-sec">
            <div className="contact-us-sec-col">
              {contactFormName}
              <input
                type="text"
                id="name"
                name="navn"
                required
                autoComplete="name"
              />
            </div>
            <div className="contact-us-sec-col">
              {contactFormCompanyname}
              <input
                type="text"
                id="companyname"
                name="selskap"
                required
                autoComplete="organization"
              />
            </div>
          </section>
          <section className="contact-us-sec">
            <div className="contact-us-sec-col">
              {contactFormMail}
              <input
                type="email"
                id="mail"
                name="epost"
                required
                autoComplete="email"
              />
            </div>
            <div className="contact-us-sec-col">
              {contactFormNumber}
              <input
                type="tel"
                id="number"
                name="telefon"
                required
                autoComplete="tel"
              />
            </div>
          </section>
          {contactFormButton}
        </form>
      </section>
    );
  }
}

export default ContactForm;
