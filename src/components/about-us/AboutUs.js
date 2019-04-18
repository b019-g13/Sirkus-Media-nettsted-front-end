import React from "react";
class AboutUs extends React.Component {
  render() {
    return (
      <section className="about-us layout-boxed">
        {this.props.children.map((children, i) => {
          return children;
        })}
      </section>
    );
  }
}

export default AboutUs;
