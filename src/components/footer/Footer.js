import React from "react";
import "./footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p>{this.props["tekst"]}</p>
      </footer>
    );
  }
}

export default Footer;
