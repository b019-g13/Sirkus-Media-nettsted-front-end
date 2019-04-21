import React from "react";
class AboutUs extends React.Component {
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
    return (
      <section className="about-us layout-boxed">
        {this.state.children.map(child => {
          return child;
        })}
      </section>
    );
  }
}

export default AboutUs;
