import React from "react";
import "./footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-inner layout-boxed">
          <section className="footer-inner-left">
            <div>
              <p>{this.props["tekst"][0]}</p>
            </div>
            <div className="footer-inner-left-links">
              <a href="#">{this.props["intern-link"][0]}</a>
              <a href="#">{this.props["intern-link"][1]}</a>
            </div>
            <p>{this.props["tekst"][1]}</p>
          </section>
          <section className="footer-inner-right">
            {this.props.children.map((children, i) => {
              return children;
            })}
            <a href="#">{this.props["intern-link"][2]}</a>
          </section>
        </div>
        <div className="footer-copyright">
          <p>{this.props["tekst"][2]}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
